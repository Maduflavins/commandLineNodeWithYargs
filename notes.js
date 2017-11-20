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
    console.log('removing note', title);
}

module.exports= {
    addNote,
    getAll, 
    getNote,
    removeNote
};