const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

// Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

// Setup static directory to serve html, css, and other assets
app.use(express.static(publicDir));

const varSet = {
  name: 'Joseph Kligel',
  year: new Date().getFullYear()
}
const { name, year } = varSet
// Routing for different pages
app.get('/', (req, res) => {
  res.render('index', {
		title: 'Weather App',
		name,
    year
	});
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
    name,
    year
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
    name,
    year
	})
})

app.get('/weather', (req, res) => {
  res.render('weather', {
			title: 'Weather',
      forecast: 'This is a forecast',
      location: 'This is the location'
    })
  })

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help page Cannot be found.',
    name,
    year
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page Cannot be found.',
    name,
    year
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
