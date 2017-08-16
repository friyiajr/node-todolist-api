// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// 	if(err) {
// 		console.log('Connection Failure');
// 		return;
// 	}
// 	console.log('Database Connection is live!');
//
//   // db.collection('Todos').findOneAndUpdate({
//   //   _id: ObjectID('59933bea9b3181ef80a8264a')
//   // }, {
//   //   $set: {
//   //     completed: true
//   //   }
//   // }, {
//   //   returnOriginal: false
//   // }).then((result) => {
//   //   console.log(result);
//   // });
//
//   db.collection('Users').findOneAndUpdate({
//     _id: ObjectID("5991f7f519ebb7359e2ed01a")
//   }, {
//     $set: {
//       name: "DEBUG"
//     }, $inc: {
//       age: 1
//     }
//   },
//   {
//     returnOriginal: false
//   }).then((res) => {
//     console.log(res)
//   });
//
//
// 	//db.close();
// });
