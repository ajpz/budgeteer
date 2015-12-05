var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

// var userSchema = {
// 	firstName: { type: 'String', required: true }, 
// 	lastName: { type: 'String', required: true }, 
// 	age: { type: 'Number', required: true }, 
// 	dob: { type: 'Number', required: true }, 
// 	family: {}


// }; 

var transactionSchema = {
	amount: { type: Number, required: true }, 
	baseType: { enum: ['credit', 'debit'], required: true }, 
	category: { type: String, required: true }, // dining or entertainment...
	date: { type: String, required: true }, // '2014-10-14', 
	container: { type: String, required: true }
}; 


var Transaction = mongoose.model('transaction', transactionSchema); 

module.exports = {
 	Transaction: Transaction,
} 