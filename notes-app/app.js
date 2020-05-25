#! /usr/local/bin/node
const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//Customize yarg version
yargs.version('1.1.0')

//Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: function(){
	console.log('Adding a new note!')
	}
})

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function(){
		console.log('Removing a note!')
	}
})

yargs.command({
	command: 'list',
	describe: 'Describes a note',
	handler: () => console.log('Describing a note!')
})

yargs.command({
	command: 'read',
	describe: 'Reads a note',
	handler: () => console.log('Reading a note!')
})

console.log(yargs.argv)

