var express = require('express');
var bluebird = require('bluebird');


var Router = express.Router();

Router.get('/dashboard/:name', function(req, res, next) {
	if(req.params.name === 'john'){
			res.render('index.html');
	}else {
			res.render('index1.html');
	}

})



module.exports = Router;
