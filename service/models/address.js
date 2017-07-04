var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var addressSchema = new Schema({
	address_line: { type: String, required: true },
	city: { type: String, required: true },
	postal_code: { type: String, required: true },
	country: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
var Address = mongoose.model('Address', addressSchema);

// make this available to our users in our Node applications
module.exports = Address;
