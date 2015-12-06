var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var bluebird = require('bluebird');
var path = require('path');
var swig = require('swig');

var app = express();

// set-up morgan, body-parser, express.static
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//SWIG Stuff
// point res.render to the proper directory
app.set('views', '.');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
swig.setDefaults({cache: false});


app.use('/', require('./routes'));

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next) {
	err.status = err.status || 500;
	res.status(err.status).send();
})

app.listen(process.env.PORT || 3000, function(){
	console.log('Listening on port 3000');
})
