var express = require('express');

var dbConfig = require('./db');
var db = dbConfig.db;
var mongojs = dbConfig.mongojs;
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// configuration
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());

// routes
app.get('*', function(req, res) {
  res.render('index.html');
});

// start app
var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Express server listening on http://%s:%s", host, port);
})