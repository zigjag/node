const chalk = require('chalk');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Los Angeles', (error, result) => {
	error ? console.log(chalk.bgRed(error)) : console.log(chalk.bgGreen(result))
});

forecast('Los Angeles', (err, data) => {
	err ? console.log(chalk.bgRed(err)) : console.log(chalk.bgGreen(data));
});
