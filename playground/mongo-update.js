const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://db:27017/TodoApp', (err, client) => {
  if (err){
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5f2d525a0d269900ff4480f5')
   }, {
     $set: {
       name: 'Diego'
     }, $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
    console.log(result);
  });
   //client.close();
});
