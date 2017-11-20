const fs = require('fs');

var originalNote = {
    title: "Some title",
    body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var notes = JSON.parse(noteString);
var noteString = fs.readFileSync('notes.json');

console.log(typeof note);
console.log(note.title);