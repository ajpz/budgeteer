var mongoose = require('mongoose');
console.log(mongoose);
mongoose.connect('mongodb://localhost/budgeteer');

var Schema = mongoose.Schema;

mongoose.connection.on('error', console.error.bind(console));


var transactionSchema = new Schema ({
	amount: { type: Number, required: true },
	baseType: { type: String },
	category: { type: String, required: true }, // dining or entertainment...
	date: { type: String, required: true }, // '2014-10-14',
	container: { type: String, required: true },
	userName: {type: String}
});

var userSchema = new Schema ({
	name: {type: String, required: true}
})

transactionSchema.statics.findCreditTimeSeries = function(baseType, container) {
  //console.log(baseType);
  return this.find({ baseType: baseType, container : container }).exec()
		.then(function(timeSeries) {
      return timeSeries.map(function(transaction) {
        return {
          date: transaction.date,
          amount: transaction.amount,
          container: transaction.container
        }
      })
    })
}

transactionSchema.statics.findCategoryTimeSeries = function(baseType, name ) {
  console.log('in statics');
  return this.find({ baseType: baseType, userName: name}).exec()
    .then(function(timeSeries) {
      console.log('in statics: ', timeSeries)
      return timeSeries.map(function(transaction) {
        return {
          date: transaction.date,
          amount: transaction.amount,
          container: transaction.container,
          category: transaction.category,
					userName: transaction.userName
        }
      })
    })
}


var Transaction = mongoose.model('transaction', transactionSchema);
var UserName = mongoose.model('UserName', userSchema);

module.exports = {
	Transaction: Transaction,
	UserName: UserName
};
