const request = require('request')

let cityName = 'Memphis';
const key = '792d505e7a9c3b263140201a5658b4fc';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

request({url: url, json: true}, (err, response) => {
	const data = response.body;

	console.log(data.city)
	console.log(data.list[0].main);
});

