const notesRoute = require('express').Router();

notesRoute.all('/',(req,res)=>{
    console.log('notes in api reached');
    res.send("notes in api reached");
});

module.exports = notesRoute;