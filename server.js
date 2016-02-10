var express = require('express');
var nodeExcel = require('excel-export');
// var zip = new require('node-zip')();
var JSZip = require('JSZip');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var app = express();



var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/my_database_name';


MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    
    console.log('Connection established to', url);

    var collection = db.collection('users');

   
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

   
    collection.insert([user1, user2, user3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('the document has been inserted');
      }
     
      db.close();
    });
  }
});






app.get('/Excel', function(req, res){
  console.log('its on!');

 var zip = new JSZip();
  zip.file("assgmnt.txt", 'this is where i want the dump of mongodb');
var content = zip.generate({base64:false,compression:'DEFLATE'});

  	res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  	res.setHeader("Content-Disposition", "attachment; filename=" + "assgmt.zip");
    
    console.log(content);
  	res.end(content, 'binary');
});

app.listen(5000);
console.log('Listening on port 5000');