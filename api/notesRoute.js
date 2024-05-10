const handleFileUpdate = require('../helpers/handleFileUpdate');
const handleFileRead = require('../helpers/handleFileRead')

const notesRoute = require('express').Router();

notesRoute.get('/',(req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    var notes = {};
    async function getNotes() {
        notes = await handleFileRead(__dirname,'db');

        res.json(notes);
    }
    getNotes();
    console.log('notes in api reached');
    
});

notesRoute.post('/',(req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    
    const note = req.body;
    //console.log("req", note);
    res.json(handleFileUpdate(__dirname,'db',note));
    
    
    console.log('Post Request notes in api reached');
    
});

notesRoute.delete('/:id',(req,res)=>{

});

module.exports = notesRoute;