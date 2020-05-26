const fs = require('fs')

const dataBuffer = fs.readFileSync('book.json')
const data = JSON.parse(dataBuffer.toString())
data.name = 'Joseph'
data.age = 29
console.log(data)

const dataJSON = JSON.stringify(data)
fs.writeFileSync('book.json', dataJSON)
