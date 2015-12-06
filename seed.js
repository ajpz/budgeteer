

// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var mongoose = require('mongoose');
var Transaction = require('./models/index.js').Transaction;
var UserName = require('./models/index.js').UserName;

mongoose.connect('mongodb://localhost/budgeteer');


var userData2 = require('./userData2.js');
var userData3 = require('./userData3.js');

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");

    UserName.create({
      name: "john"
    });
    UserName.create({
      name: "jane"
    });

    var mapOfCreatedDocuments = userData2.transaction.map(function(transaction) {

      return Transaction.create({
        amount: transaction.amount.amount,
        baseType: transaction.baseType,
        category: transaction.category,
        date: transaction.date.date,
        container: transaction.CONTAINER,
        userName: 'john'

      })
    })

    var mapOfCreatedDocuments2 = userData3.transaction.map(function(transaction) {

      return Transaction.create({
        amount: transaction.amount.amount,
        baseType: transaction.baseType,
        category: transaction.category,
        date: transaction.date.date,
        container: transaction.CONTAINER,
        userName: 'jane'

      })
    })
    var array = mapOfCreatedDocuments.concat(mapOfCreatedDocuments2);
    Promise.all(array)
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
