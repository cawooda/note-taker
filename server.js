const PORT = 3001;
const dayjs = require('dayjs');

const staticOptions = {
    maxAge : '1d'
}   
const path = require('path');
const express = require('express');
const app = express();
const serverLog = require('./db/serverLog')

app.use(serverLog);

app.use(express.static('public'));

app.get('/',(req,res) => {
    console.log(path.join(__dirname,'public','notFound.html'))
    //res.sendFile(path.join(__dirname,'public','notFound.html'));
});

app.listen(PORT,()=>{
    
    
})