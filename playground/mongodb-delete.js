const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Connection Failure');
		return;
	}
	console.log('Database Connection is live!');


   // * deleteMany
   //db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
   //   console.log(result);
   //});

   // * deleteOne
   //  db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
   //    console.log(result);
   //  });

   // * findOneAndDelete
   //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   //   console.log(result)
   //});

   db.collection('Users').findOneAndDelete({
     _id: ObjectID('5991fb7e09e17f35d034b581')
   }).then((result) => {
     console.log(result);
   })



	//db.close();
});
