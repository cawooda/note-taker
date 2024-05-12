const {handleGetNotes,handleFileAdd,handleFileDelete} = require('../helpers/handleFileUpdate');

const uuid = require('../helpers/uuid');

const notesRoute = require('express').Router();



notesRoute.get('/',async (req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    const notes = await handleGetNotes();
    if (notes) {
        res.json(notes)
    } else res.json({"error":"error"});
    
});

notesRoute.post('/',(req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    const {id,title,text} =  req.body;
    const note = {
        id:id,
        title:title,
        text:text
    }
    console.log("post route note",note);
    handleFileAdd(note)
    res.status(202).send("OK");
});

notesRoute.delete('/:id',async (req,res)=>{
    
    const id = req.params.id;
    handleFileDelete(id);
    res.status(202).send("OK");
});

module.exports = notesRoute;