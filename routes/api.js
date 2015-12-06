var express = require('express'); 
var bluebird = require('bluebird'); 
var api = express.Router(); 
var Transaction = require('../models'); 


module.exports = api; 

// /api/
api.get('/users/:id/transactions/', function(req, res, next) {
  var _id = req.params.id; 
  
	Transaction.find({}).exec() //add transaction
		.then(function(transactions) {
      res.json(transactions); 
    })
    .then(null, next); 
})

api.get('/users/:id/transactions/:container/:baseType', function(req, res, next) {
	Transaction.findCreditTimeSeries(req.params.baseType.toUpperCase(), req.params.container)
		.then(function(ts) {
			res.json(ts); 
		})
})

api.get('/users/:id/transactions/:baseType/category/all', function(req, res, next) {
	console.log('hitting route'); 
	Transaction.findCategoryTimeSeries(req.params.baseType.toUpperCase())
		.then(function(ts) {
		console.log('here', ts)			
			var dataObj = {};  // { Rent: [{ date: date, amoutn: amount }] } 
			ts.forEach(function(tx) {
				console.log('hahah', tx); 
				if(!dataObj[tx.category]) dataObj[tx.category] = []; 
				dataObj[tx.category].push(tx); 
			})
			res.json(dataObj); 
		})	
}) 

