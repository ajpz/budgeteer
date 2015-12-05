var bodyParser = require('body-parser'); 
var express = require('express'); 
var morgan = require('morgan'); 
var bluebird = require('bluebird'); 
var path = require('path'); 


var app = express(); 

// set-up morgan, body-parser, express.static
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname + '/public'))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', require('./routes')); 

app.use('/api', require('./routes/api'));

app.use(function(req, res, next) {
	var err = new Error('Not Found'); 
	err.status = 404; 
	next(err); 
}) 

app.use(function(err, req, res, next) {
	err.status = err.status || 500; 
	res.status(err.status).send(); 
})

app.listen(3000, function(){
	console.log('Listening on port 3000'); 
})


