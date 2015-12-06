var express = require("express");
var morgan = require("morgan");
var path = require('path');
var bodyParser = require("body-parser");
var swig = require("swig");
var app = express();
var mime = require('mime');
var port = 3000;
var fs = require("fs");
var http = require("http");

/////////REQUIRED FOR GETTING TRANSACTIONS
var globals = require('./globals');
var Promise = require('bluebird');
// The below is required to getting the request information
var https = require("https");
// var request = require('request');
var request = Promise.promisify(require("request"));
Promise.promisifyAll(request);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //to support url encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
//////////END OF REQUIRED

//SWIG Stuff
// point res.render to the proper directory
app.set('views', __dirname + '/views');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
swig.setDefaults({cache: false});

app.use(function(req, res, next){
	console.log(res.statusCode, req.method, req.path);
	next();
});

app.use(function(req, res, next) {
  var mimeType = mime.lookup(req.path)
  fs.readFile('./stylesheets/' + req.path, function(err, fileBuffer) {
    if(err) return next();
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
});
/////////////BEGIN
app.get('/api/users/:user', function(req, res, next) {
  globals.options.method = 'POST';
  globals.options.url = globals.baseUrl + globals.cobrandLoginURL;
  globals.options.headers = globals.headers;
  globals.options.form = {
    cobrandLogin : globals.cobrandLogin,
    cobrandPassword : globals.cobrandPassword
  }
  request(globals.options, function(error, response, body) {
    var data = JSON.parse(body);
    globals.cobSessionToken = data.session.cobSession;
    globals.options.url = globals.baseUrl + globals.userLoginURL;
    globals.options.method = 'POST';
    globals.options.headers.Authorization = 'cobSession=' + globals.cobSessionToken
    //put into own function so you dont need to hard code a user here
    var advisorUser = req.params.user;
    var yodleeUser = globals.users[advisorUser];
    var yodleePw = '';
    if (!yodleeUser || !yodleePw) {
      yodleeUser = globals.users['john'];
      yodleePw = globals.user1pw;
    }

    globals.options.form =  {
      userLogin : yodleeUser,
      userPassword: yodleePw
    }

    request(globals.options, function(error, response, body) {
      data = JSON.parse(body);
      globals.userSessionToken = data.session.userSession;
      console.log("cobSessionToken ", globals.cobSessionToken);
      console.log("userSessionToken", globals.userSessionToken);
      //Time to get the user transactions
      var transactionsOptions = {
          url: 'https://developer.api.yodlee.com:443/ysl/restserver/v1/transactions?toDate=2015-12-03&&&',
          method:  'GET',
          headers: {Authorization : "{cobSession=" + globals.cobSessionToken + "," + "userSession=" + globals.userSessionToken + "}"},
          form: ''
      }

      request(transactionsOptions)
        .then(function(data){
          res.send(data["body"]);
        }).then(function(){
          console.log("we got transaction data");
      });
    });
  })
});
////////////////END
app.use(function(err, req, res, next) {
	console.error(err);
	res.status(500).send(err.message);
})

app.listen(port);
