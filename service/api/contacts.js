//Import the mongoose module
var mongoose = require('mongoose');
var Contact = require('../models/contact');
var config = require('../config');

//Get the default connection
//var mongoDb = mongoose.createConnection(config.mongodbUri);
var mongoDb = mongoose.connect(config.mongodbUri, function(err) {
    if (err) {
        console.err(err);
    } else {
        console.log('Connected');
    }
});

//Bind connection to error event (to get notification of connection errors)
//mongoDb.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Get list of contacts
exports.list = function(req, res) {

  if (mongoDb){
		Contact.find({}, function(err, contacts) {
		if (err) throw err;

		// object of all the contacts
		console.log(contacts);
		res.send(contacts);
		});
    }
    else
    {
        config.logStars('No database object!');
        res.status(404).send({});
    }
} ;

//Get Contact by Id.
exports.getById = function(req, res) {
  var id = req.params.id;
  if (mongoDb){
		Contact.findOne({_id: id}, function(err, contact) {
		if (err) throw err;
		res.send(contact);
		});
    }
    else
    {
        config.logStars('No database object!');
        res.status(404).send({});
    }
} ;

// Creates a new contact in datastore.
exports.create = function(req, res) {
console.log(req.body.first_name);
var contact = new Contact(req.body);

console.log(mongoose.connection.readyState);
if (mongoDb){
 console.log('Adding contact: ' + JSON.stringify(contact));
  contact.save(function(err) {
	if (err) {
			res.send({'error':'An error has occurred'});
		} else {
			console.log('Success: ' + JSON.stringify(contact));
			res.send(contact);
		}
	});
}
else
{
	console.log('No database object!');
}

};

exports.update = function(req, res) {

	var id = req.params.id;
    // get a contact with ID
	Contact.findById(id, function(err, contact) {
	  if (err) throw err;
	  console.log('Contact Found - ' + JSON.stringify(contact));
	  contact.first_name = req.body.first_name;
	  contact.last_name = req.body.last_name;
	  contact.address = req.body.address;
	  contact.phone_number = req.body.phone_number;

	  // save the contact
	  contact.save(function(err) {
		if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(contact));
                res.send(contact);
            }
	  });

	});

};
// delete an existing contact in datastore.
exports.delete = function(req, res) {

	var id = req.params.id;
	  console.log('Deleting contact: ' + id);
	  Contact.findByIdAndRemove(id, function(err) {
	  if (err) throw err;

	  console.log('Contact deleted!');
    res.status(200).send();

	});

};
