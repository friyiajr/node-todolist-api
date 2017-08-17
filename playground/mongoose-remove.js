const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// Todo.findOneAndRemove({_id: '5994dc5f3484270e8ba29b60'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('5994dc5f3484270e8ba29b60').then((todo) => {
//   console.log(todo)
// });
