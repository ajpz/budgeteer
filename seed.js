

// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('./models/transaction.js');
var Transaction = models.Transaction;


mongoose.connect('mongodb://localhost/budgeteer'); 


var userData = require('./userData.js'); 

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");

    var mapOfCreatedDocuments = userData.transaction.map(function(transaction) {

      return Transaction.create({
        amount: transaction.amount.amount, 
        baseType: transaction.baseType, 
        category: transaction.category, 
        date: transaction.date.date, 
        container: transaction.CONTAINER   
      })
    })

    Promise.all(mapOfCreatedDocuments)
      .then(function() {
        mongoose.connection.close(); 
    })

    console.log('Added data'); 
    // Promise.map(Object.keys(data), function(modelName) {
    //   return Promise.map(data[modelName], function(item) {
    //     return models[modelName].create(item);
    //   });
    // }).then(function() {
    //   console.log("Finished inserting data");
    // }, console.log).then(function() {
    //   mongoose.connection.close()
    // });

  });
});