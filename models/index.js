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
	container: { type: String, required: true }
}); 

// transactionSchema = 


var Transaction = mongoose.model('transaction', transactionSchema); 

module.exports = Transaction; 