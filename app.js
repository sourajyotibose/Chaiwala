var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',express.static(path.join(__dirname+ '/node_modules')));
app.use('/img',express.static(path.join(__dirname+ '/Images')));

//Enable the parsing of posted forms
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add the routing
//app.use('/newsletter', routes);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});