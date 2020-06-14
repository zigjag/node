require("dotenv").config()
const request = require('request');

function forecast(lat, lon, callback){
	const key = process.env.API_KEY
	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`


	request({ url, json: true }, (err, {body}) => {
		if(err) callback('Unable to connect to location services.', undefined);
		else if(body.message){
			callback('Unable to find location. Try search again.', undefined)
		} else {
			const {name, country} = body.city;
			const {temp} = body.list[0].main
			const data = body;
			callback(undefined, `The forecasted weather in ${name}, ${country} is ${temp}`)
		}
	});
}

module.exports = forecast;
