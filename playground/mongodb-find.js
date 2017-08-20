// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Connection Failure');
		return;
	}
	console.log('Database Connection is live!');

  db.collection('Todos').find({
		_id: new ObjectID('5991f0265570df333af04959')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to catch todos', err);
	});

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to catch todos', err);
	});

	db.collection('Users').find({
		name: 'Mike'
	}).toArray().then((usr) => {
			console.log('Users');
			console.log(`The number of users is ${usr.length}`);
			console.log(JSON.stringify(usr, undefined, 2));
	}, (err) => {
		console.log('Could not connect', err);
	});

	//db.close();
});
