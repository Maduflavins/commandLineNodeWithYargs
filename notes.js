const fs = require('fs');

var addNote = (title, body) =>{
    var notes =  [];
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.tile === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));

    }

    
};
try{
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
}catch(e){

}


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