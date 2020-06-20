// db.collection('users').insertOne({
// 	_id: id,
// 	name: 'Vikram',
// 	age: 26
// }, (error, result) => {
// 	if(error) return console.log('Unable to insert user.')
// 	console.log(result.ops)
// });

// db.collection('users').insertMany([{
//     name: 'Jen',
//     age: 20
//   },
//   {
// 		name: 'Gunther',
// 		age: 27
//   }
// ], (err, result) => {
// 	if(err) console.log('Unable to insert documents.');
// 	console.log(result.ops);
// });

// db.collection('tasks').insertMany([
// 	{
// 		description: 'Clean room',
// 		completed: true
// 	},
// 	{
// 		description: 'Vacuum floor',
// 		completed: false
// 	},
// 	{
// 		description: 'Workout',
// 		completed: true
// 	}
// ], (err, result) => {
// 	if(err) console.log('Unable to inseret documents.');
// 	console.log(result.ops);
// });

// db.collection('users').findOne({_id: new ObjectID('5eeddbab980c41867be8ff18')}, (err, user) => {
//   if(err) console.log('Unable to fetch.');
//   console.log(user)
// });

// db.collection('users').find({age: 27}).toArray((err, results) => {
//   console.log(results)
// });
//
// db.collection('users').find({age: 27}).count((err, results) => {
//   console.log(results)
// });
