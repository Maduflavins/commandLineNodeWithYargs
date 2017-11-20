const fs = require('fs');
var fetchNotes = () =>{
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }

}

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}
var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.tile === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
        

    }

    
};



var getAll = () =>{
    console.log("getting all note")
};

var getNote = (title) =>{
    console.log("getting note", title)
};

var removeNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((notes) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

module.exports= {
    addNote,
    getAll, 
    getNote,
    removeNote
};