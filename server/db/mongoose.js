//const uri = process.env.MONGODB_URI || "mongodb+srv://node-user:gPTOTOIXh7qnh9j8@mongo-cluster.jxlaa.mongodb.net/TodoApp?retryWrites=true&w=majority";
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

var mongoose = require('mongoose');
mongoose.promise = global.promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://db:27017/TodoApp', );
mongoose.connect('mongodb+srv://node-user:gPTOTOIXh7qnh9j8@mongo-cluster.jxlaa.mongodb.net/TodoApp?retryWrites=true&w=majority', {useNewUrlParser: true});
//mongodb+srv://node-user:<password>@mongo-cluster.jxlaa.mongodb.net/<dbname>?retryWrites=true&w=majority
//gPTOTOIXh7qnh9j8
//node-user
module.exports = {mongoose};
