require("dotenv").config()
const request = require('request');

function forecast(address, callback){
	const key = process.env.API_KEY
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(address)}&appid=${key}`;

	request({url: url, json: true}, (err, res) => {
		if(err) callback('Unable to connect to location services.', undefined);
		else if(res.body.message){
			callback('Unable to find location. Try search again.', undefined)
		} else {
			const data = res.body;
			callback(undefined, `The forecasted weather in ${data.city.name}, ${data.city.country} is ${data.list[0].main.temp}`)
		}
	});
}

module.exports = forecast;
