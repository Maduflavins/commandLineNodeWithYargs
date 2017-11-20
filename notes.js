var addNote = (title, body) =>{
    console.log('Adding Note', title, body);
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