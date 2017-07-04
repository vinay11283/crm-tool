var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email_address: {type: String, required: true},
	address: { type: String, required: true },
	phone_number: { type: String, required: true },
	contact_id: {type: String, required: true}
});

// the schema is useless so far
// we need to create a model using it
var Customer = mongoose.model('Customer', customerSchema);

// make this available to our users in our Node applications
module.exports = Customer;
