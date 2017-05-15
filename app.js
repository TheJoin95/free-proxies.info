var io = require('socket.io')();
var MongoClient= require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/scraping", function(err, db) {
  if (err) {
    console.log('Failed to connect to mongoDB database.');
  } else {
    console.log('Succesfully connected to mongoDB database.');
  };

io.sockets.on('connection', function(socket) {
// send data to client
  var collection = db.collection('proxy');
  collection.find().sort({_id:-1}).limit(1).toArray(function(err, docs) {
    console.log(docs);
    socket.emit('message', {'newData': docs});
  });
 });
});
