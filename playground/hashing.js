const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');

console.log(decoded);

//
// var msg = 'I am user number 3';
// var hash = SHA256(msg).toString();
//
// console.log(`msg ${msg}\nhash: ${hash}`);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };
//
//
//
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if(resultHash === token.hash) {
//   console.log('data was not tampered');
// } else {
//   console.log('data was changed do not trust');
// }
