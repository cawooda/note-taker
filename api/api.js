const apiRoute = require('express').Router();
const notesRoute = require('./notesRoute');

apiRoute.use('/notes',notesRoute);

apiRoute.all('/',(req,res)=>{
    console.log('api reached');
    res.send("api reached");
});

module.exports = apiRoute;