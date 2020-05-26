#! /usr/local/bin/node
const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yarg version
yargs.version('1.1.0')

//Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		console.log('Title: ' + argv.title)
		console.log('Body: ' + argv.body)
	}
})

//Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function(){
		console.log('Removing a note!')
	}
})

//Create list command
yargs.command({
	command: 'list',
	describe: 'Lists all notes',
	handler: () => console.log('Listing notes!')
})

//Create read command
yargs.command({
	command: 'read',
	describe: 'Reads a note',
	handler: () => console.log('Reading a note!')
})

yargs.parse()
