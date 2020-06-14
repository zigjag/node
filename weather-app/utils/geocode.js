require('dotenv').config();
const request = require('request');

const key = process.env.API_KEY

function geocode(address, callback){
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=${key}`;
		request({url, json: true}, (error, {body}) => {
			if(error) callback('Unable to connect to location services.', undefined);
			else if(body.message){
				callback('Unable to find location. Try search again.', undefined);
			} else {
				const {name} = body;
				const {country} = body.sys;
				const {lon: longitude, lat: latitude} = body.coord;
				const {temp, feels_like} = body.main;
				callback(undefined, {
					longitude,
					latitude,
					statement: `The current temp in ${name}, ${country} is ${temp}, but it feels like ${feels_like}.`
				})
			}
		});
}

module.exports = geocode
