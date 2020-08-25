var env = process.env.NODE_ENV;
if(env === 'development') {
  process.env.PORT = 4000;
  process.env.MONGODB_URI = 'mongodb://db:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 4000;
  process.env.MONGODB_URI = 'mongodb://db:27017/TodoAppTest';
}

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const mongoose = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

console.log(`env **** ${env}`);

app.listen(process.env.PORT, () => {
  console.log(`Started on port ${process.env.PORT}`);
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos',(req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).lean().then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    return res.status(404).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).lean().then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    return res.status(404).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id =  req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  console.log(JSON.stringify(body));
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

module.exports = {app};
