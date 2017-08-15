const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// User model
// email - required, trimmed, type: string, minlength: 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var otherTodo = new Todo({
//   text: '  Edit this code  '
// })
//
// otherTodo.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });

var usr = new User({
 email: "e@e.com"
});

usr.save().then((doc) => {
  console.log(doc);
}, (err) => {
  console.log(err);
});
