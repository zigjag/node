require('dotenv').config();
const request = require('request');

// const key = process.env.API_KEY
const key = '792d505e7a9c3b263140201a5658b4fc'

function geocode(address, callback){
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&units=imperial&appid=${key}`;
		request({url, json: true}, (error, {body}) => {
			if(error) callback('Unable to connect to location services.', undefined);
			else if(body.message){
				callback('Unable to find location. Try search again.', undefined);
			} else {
			const {name} = body;
			const {country} = body.sys;
			const {main, description} = body.weather[0]
			const {lon: longitude, lat: latitude} = body.coord;
			const {temp, feels_like} = body.main;
			callback(undefined, {
				longitude,
				latitude,
				name,
				statement: `The current weather in ${name}, ${country} is ${temp}°F with ${description}, but it feels like ${feels_like}°F.`
			})
		}
	});
}

module.exports = geocode
