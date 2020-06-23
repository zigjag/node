const https = require('https');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=memphis&appid=792d505e7a9c3b263140201a5658b4fc'

const request = https.request(url, (response) => {
	let data = ''
	response.on('data', (chunk) => {
		data = data + chunk.toString()
	})
	
	response.on('end', () => {
		const body = JSON.parse(data)
		console.log(body)
	})

})

request.on('error', (error) => {
	console.log('An Error:', error)
})

request.end()
