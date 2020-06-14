const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Weather</h1>');
})

app.get('/help', (req, res) => {
	res.send({
		name: 'Joseph',
		age: 29
	})
})

app.get('/about', (req, res) => {
	res.send('About page.')
})

app.get('/weather', (req, res) => {
	res.send('Your weather')
})

const port = process.env.PORT || 3000
app.listen(3000, () => {
	console.log(`Server started on ${port}`)
})
