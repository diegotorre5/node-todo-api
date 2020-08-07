//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://db:27017/TodoApp', (err, client) => {
  if (err){
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');
  // db.collection('Todos').find({_id: new ObjectID('5f2ac85e3ebae30027007b5d')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos: ${err}`);
  // });
  //
  // db.collection('Todos').find({}).count()
  // .then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log(`Unable to fetch todos: ${err}`);
  // });

  db.collection('Users').find({name: 'Diego'}).toArray().then((docs) => {
    console.log('NAME');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log(`Unable to fetch todos: ${err}`);
  });

  //client.close();
});
