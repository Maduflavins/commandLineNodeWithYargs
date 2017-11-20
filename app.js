const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs')

const notes = require('./notes.js');
const titleOptions = {
    describe: 'title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'note body',
    demand: true,
    alias: 'b'
}


const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body:bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', "read a note", {
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note created");
        notes.logNote(note);
    }else{
        console.log("title exist");
    }
}else if(command=== 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log("note not found");
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed sucessfully": "Not not found"
    console.log(message);
}else{
    console.log('command not recognized')
}