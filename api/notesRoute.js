const {handleAddObject,handleFileRead} = require('../helpers/handleFileUpdate');

const uuid = require('../helpers/uuid');

const notesRoute = require('express').Router();

async function getNotes() {
    const notes = await handleFileRead();
    const jsonNotes = await JSON.parse(notes);
    console.log("json notes",jsonNotes);
    return jsonNotes;
}

notesRoute.get('/',async (req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    const notes = await getNotes();
    if (notes) {
        res.json(notes)
    } else res.json({"error":"error"});
    
});

notesRoute.post('/',(req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    const {id,title,text} =  req.body;
    console.log("post", id,title,text);
    const note = {
        id:id,
        title:title,
        text:text
    }
    console.log("note recived for adding",id,title,text);
    handleAddObject(note)
    res.status(202);
    
});

notesRoute.delete('/:id',async (req,res)=>{
    
    const id = req.params.id;
    console.log("id from request",id);
    const allNotes = await getNotes();
    const newNotes = allNotes.filter((note)=>{
        if (note.id !== id) return true; 
    })
    console.log("all Notes",allNotes)
    console.log("newNotes", newNotes);
    
    handleFileUpdate('db',newNotes,'replace');
    console.log("new all Notes",allNotes);
    handleFileUpdate('db',allNotes);
    res.status(202)
});

module.exports = notesRoute;