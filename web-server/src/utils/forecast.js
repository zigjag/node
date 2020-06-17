require("dotenv").config()
const request = require('request');

function forecast(lat, lon, callback){
	// const key = process.env.API_KEY
	const key = '792d505e7a9c3b263140201a5658b4fc'
	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`


	request({ url, json: true }, (err, {body}) => {
		if(err) callback('Unable to connect to location services.', undefined);
		else if(body.message){
			callback('Unable to find location. Try search again.', undefined)
		} else {
			const {name, country} = body.city;
			const {temp, feels_like} = body.list[0].main;
			const {main, description} = body.list[0].weather[0];
			const data = body;
			callback(undefined, `The forecasted weather in ${name}, ${country} is ${temp}°F with ${description}, but it feels like ${feels_like}F°.`)
		}
	});
}

module.exports = forecast;
