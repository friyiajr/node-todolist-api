// // const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// 	if(err) {
// 		console.log('Connection Failure');
// 		return;
// 	}
// 	console.log('Database Connection is live!');
//
// 	// db.collection('Todos').insertOne({
// 	// 	text: "Something to do",
// 	// 	completed: false
// 	// }, (err, result) => {
// 	// 	if(err) {
// 	// 		console.log('The insertion failed', err)
// 	// 		return;
// 	// 	}
// 	// 	console.log(JSON.stringify(result.ops, undefined, 2));
// 	// });
//
// 	//Insert new doc (name, age, location)
// 	// db.collection('Users').insertOne({
// 	// 	name: "Dan Friyia",
// 	// 	age: 25,
// 	// 	location: "Waterloo, Ontario"
// 	// }, (err, result) => {
// 	// 	if(err) {
// 	// 		return console.log("Unable to insert");
// 	// 	}
// 	// 	console.log(result.ops[0]._id.getTimestamp());
// 	// });
//
// 	db.close();
// });
