const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

var id = '59935609c87ae1d40892008c';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// })

// Query the user at the id that you picked
// User.findById
// Handle 3 cases
//  Query works but there is no user
//  User was found
//  Handle any errors that may have occured

User.findById(id).then((usr) => {
  if(!usr) {
    return console.log('User @ ID not found');
  }
  console.log(usr)
}).catch((e) => {
  console.log(e);
})
