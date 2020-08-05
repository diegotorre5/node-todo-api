const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://db:27017/TodoApp', (err, client) => {
  if (err){
    return console.log(`Unable to connect to MongoDB server: ${err}`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  client.close();
});
