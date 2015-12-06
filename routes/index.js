var express = require('express'); 
var bluebird = require('bluebird'); 


var Router = express.Router(); 

Router.get('/', function(req, res, next) {
	res.status(200).send('Hello World');
})


module.exports = Router; 