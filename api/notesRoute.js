const notesRoute = require('express').Router();

notesRoute.all('/',(req,res)=>{
    //needs to serve a list of notes. This should be an array of objects with a title field in them
    const notes = [{
        title:"First Note"
    },{
        title:"Second Note"
    },{
        title:"Third Note"
    }];

    res.json(notes);
    console.log('notes in api reached');
    res.send("notes in api reached");
});

module.exports = notesRoute;