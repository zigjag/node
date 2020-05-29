const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
	const notes = loadNotes()

	const duplicateNote = notes.find((note) => note.title === title)
	
	if(!duplicateNote){
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added'))
	} else console.log(chalk.red.inverse('Note title taken'))
}

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title)
	if(notesToKeep.length < notes.length){
		saveNotes(notesToKeep)
		console.log(chalk.bgGreen('Note removed!'))
	} else console.log(chalk.bgRed('No note found!'))
}

debugger

const listNotes = () => {
	const notes = loadNotes()
	console.log(chalk.inverse('Your notes'))
	notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
	notes = loadNotes()
	const found = notes.find((note)=> note.title === title)
	if(found){
		console.log(chalk.inverse('Reading Note'))	
		console.log(`Title: ${found.title}`)
		console.log(`Body: ${found.body}`)
	} else console.log(chalk.red.inverse('No note found'))
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('todo.json', dataJSON)
}

function loadNotes() {
	try{
		const dataBuffer = fs.readFileSync('todo.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)	
	} catch (e){
		return []
	}
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}
