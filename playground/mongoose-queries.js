const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5f3a4c400e64eb02d8bd541c';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).lean().then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).lean().then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).lean().then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
User.findById('5f3159966d187100244d6ca8').lean().then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
