const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://db:27017/TodoApp', (err, client) => {
  if (err){
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   db.collection('Users').deleteMany({name: 'Diego'}).then((result) => {
     console.log(result);
   });

   db.collection('Users').findOneAndDelete({_id: new ObjectID("5f2ac819fc2375000abb54a4")}).then((result) => {
    console.log(result);
  });
   //client.close();
});
