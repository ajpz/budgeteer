var mongoose = require('mongoose'); 
mongoose.connection('mongodb://localhost/iAdvisor'); 
mongoose.connection.on('error', console.error.bind(console)); 

module.exports = {
	Transaction = require('./transaction'); 
}
