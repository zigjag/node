require('dotenv').config();
const request = require('request');

const key = process.env.API_KEY

function geocode(address, callback){
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=${key}`;
	request({url: url, json: true}, (error, response) => {
		if(error) callback('Unable to connect to location services.', undefined);
		else if(response.body.message){
			callback('Unable to find location. Try search again.', undefined);
		} else {
			const data = response.body;
			callback(undefined, `The current temp in ${data.name}, ${data.sys.country} is ${data.main.temp}, but it feels like ${data.main.feels_like}.`);
		}
	});
}

module.exports = geocode
