//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 // var obj = new ObjectID();
 // console.log(obj);
MongoClient.connect('mongodb://db:27017/TodoApp', (err, client) => {
  if (err){
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    text:'Walk the dog',
    completed: false
  }, (err, result) =>{
    if(err){
      return console.log('Unable to insert Todo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  // db.collection('Users').insertOne({
  //   name: 'Diego',
  //   age: 36,
  //   location: 'Nozaru'
  // }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to insert User');
  //     }
  //     console.log((JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)));
  // })
  client.close();
});
