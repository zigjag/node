const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
	return('Your notes...')
}

const addNote = function(title, body){
	const notes = loadNotes()

	const duplicateNotes = notes.filter(function(note){
		return note.title === title
	})
	
	if(duplicateNotes.length === 0){
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added'))
	} else {
		console.log(chalk.red.inverse('Note title taken'))
	}
}

const removeNote = function(title){
	const notes = loadNotes()
	const notesToKeep = notes.filter(function(note){
		return note.title !== title
	})
	if(notesToKeep.length < notes.length){
		saveNotes(notesToKeep)
		console.log(chalk.bgGreen('Note removed!'))
	} else {
		console.log(chalk.bgRed('No note found!'))
	}
}

const listNotes = function(){
	dataBuffer = fs.readFileSync('notes.json')
	data = JSON.parse(dataBuffer)
	data.forEach(item => {
		console.log(`${item.title}`)
	});
}

function readNote(title){
	dataBuffer = fs.readFileSync('notes.json')
	data = JSON.parse(dataBuffer)
	const found = data.filter(function(item){
		return item.title === title
	})
	console.log(`Title: ${found[0].title}`)
	console.log(`Body: ${found[0].body}`)
}

const saveNotes = function(notes){
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

function loadNotes() {
	try{
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)	
	} catch (e){
		return []
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}
