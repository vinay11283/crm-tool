
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
	return next();
	/*
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'admin' && user.pass === '123') {
    return next();
  } else {
    return unauthorized(res);
  };
  */
};

var cors = require('cors');

var bodyParser = require('body-parser');

var express = require('express');
//create an express app
var app = express();
app.use(cors());
//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//add route for the root
app.get('/',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});
// Listen on port 5000, IP defaults to 127.0.0.1
app.listen(process.env.PORT || 5000)
//create routing objects
//customers.
var customer = require('./api/customers');
app.get('/api/customers',auth,customer.list);
app.get('/api/customers/:id',auth,customer.getById);
app.post('/api/customers',auth,customer.create);
app.put('/api/customers/:id',auth,customer.update);
app.delete('/api/customers/:id',auth,customer.delete);

var contact = require('./api/contacts');
app.get('/api/contacts',auth,contact.list);
app.get('/api/contacts/:id',auth,contact.getById);
app.post('/api/contacts',auth,contact.create);
app.put('/api/contacts/:id',auth,contact.update);
app.delete('/api/contacts/:id',auth,contact.delete);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:5000/");