var express = require('express');
var bluebird = require('bluebird');
var api = express.Router();
var Transaction = require('../models').Transaction;
var UserName = require('../models').UserName;


module.exports = api;

// /api/
api.get('/users/:name/transactions/', function(req, res, next) {
  var _id = req.params.id;

	Transaction.find({}).exec() //add transaction
		.then(function(transactions) {
      res.json(transactions);
    })
    .then(null, next);
})

api.get('/users/:name/transactions/:container/:baseType', function(req, res, next) {
	Transaction.findCreditTimeSeries(req.params.baseType.toUpperCase(), req.params.container)
		.then(function(ts) {
			res.json(ts);
		})
})

api.get('/users/:name/transactions/:baseType/category/all', function(req, res, next) {
	console.log('hitting route');
	Transaction.findCategoryTimeSeries(req.params.baseType.toUpperCase(), req.params.name)
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

api.get('/users/:name/transactions/:baseType/category/summary', function(req, res, next){
  Transaction.findCategoryTimeSeries(req.params.baseType.toUpperCase(), req.params.name)
		.then(function(ts) {
		console.log('here', ts)
			var dataObj = {};  // { Rent: [{ date: date, amoutn: amount }] }
			ts.forEach(function(tx) {
				console.log('hahah', tx);
				if(!dataObj[tx.category]) dataObj[tx.category] = [];
				dataObj[tx.category].push(tx);
			})
      var summaryData = {};
      for(var key in dataObj){
        var sum = dataObj[key].reduce(function(sum, next){
          return sum + next.amount;
        }, 0)
        var count = dataObj[key].length;
        summaryData[key] = [{sum: sum, numberOfTrans: count}]
      }
			res.json(summaryData);
		})
})
