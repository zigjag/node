const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir));

app.get('/', (req, res) => {
	res.render('index');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server started on ${port}`)
})
