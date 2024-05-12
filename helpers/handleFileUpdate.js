const fs = require('fs/promises');
const path = require('path');
const FILE = path.join(__dirname,"..","db","db.json");

const initLog = {
    
}

async function handleGetNotes() {
    var notes = await fs.readFile(FILE,'utf8');
    if (!notes) {
        notes = '[]'
        fs.writeFile(FILE,notes);
    };
    const jsonNotes = await JSON.parse(notes);
    return jsonNotes;
}


async function handleFileAdd (writeObject) {
    const notes = await handleGetNotes();
    console.log("notes before push",notes);
    
    notes.push(writeObject);
    console.log("notes after push",notes);
    const stringContents = await JSON.stringify(notes);
    fs.writeFile(FILE,stringContents);
}

async function handleFileDelete (id) {
    
    const allNotes = await handleGetNotes();
    const newNotes = allNotes.filter((note)=>(note.id !== id)
    );
    
    const stringContents = await JSON.stringify(newNotes);
    fs.writeFile(FILE,stringContents);
}

module.exports = {
    handleFileAdd, 
    handleGetNotes,
    handleFileDelete
}