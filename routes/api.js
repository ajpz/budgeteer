var express = require('express'); 
var bluebird = require('bluebird'); 
var api = express.Router(); 
var Transaction = require('../models'); 


module.exports = api; 

// /api/
api.get('/users/:id/transactions/', function(req, res, next) {
  var _id = req.params.id; 
  // console.log(Transaction); 
	Transaction.find({}).exec() //add transaction
		.then(function(transactions) {
      console.log('arrive here'); 
      // console.log(transactions)
      res.json(transactions); 
    })
    .then(null, next); 
})


