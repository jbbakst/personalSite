var databaseURL = 'db';
var collections = ["Collection"]; // replace "Collection" with collection names
var mongojs = require('mongojs');
var db = mongojs.connect(databaseURL, collections);

module.exports = {
  db: db,
  mongojs: mongojs 
}