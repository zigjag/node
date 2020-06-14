const chalk = require('chalk');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) return console.log(chalk.bgRed('No location was used. Please add location.'));

geocode(address, (error, {longitude, latitude, statement}) => {
	error ? console.log(chalk.bgRed(error)) : console.log(chalk.bgGreen(statement));

	forecast(latitude, longitude, (err, forecastedResult) => {
		err ? console.log(chalk.bgRed(err)) : console.log(chalk.bgGreen(forecastedResult));
	});
});
