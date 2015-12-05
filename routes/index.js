var bodyParser = require('body-parser'); 
var express = require('express'); 
var morgan = require('morgan'); 
var bluebird = require('bluebird'); 
var path = require('path'); 


var Router = express.Router(); 

Router.get('/', function(req, res, next) {
	res.status(200).send('Hello World');

})

module.exports = Router; 