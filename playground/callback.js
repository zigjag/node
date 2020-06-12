//setTimeout(() => console.log('Two seconds are up!'), 2000);

//const names = ['Andrew', 'Jen', 'Jess']
//const shortNames = names.filter(name => name.length <= 4);

//function geocode(address, callback){
//	setTimeout(() => {
//		const data = {
//			latitude: 0,
//			longitude: 0
//		};
//		callback(data);
//	}, 2000)
//}

//geocode('Philadelphia', (data) => {
//	console.log(data)
//})

function add(x, y, callback){
	setTimeout(() => {
		answer = x + y;
		callback(answer);
	}, 2000);
}

add(1, 4, (sum) => {
	console.log(sum)
})
