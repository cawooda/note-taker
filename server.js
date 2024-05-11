const PORT = 3001;
const dayjs = require('dayjs');
const path = require('path');

const staticOptions = {
    maxAge : '1d'
}   

const express = require('express');
const app = express();

const apiRoute = require('./api/api')

//middlewhere
app.use(express.static('public'))

app.use(express.json());

//routes
app.use('/api',apiRoute);

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname,'public/notes.html'));
});

app.get('/', function(req, res){
    res.redirect('public/index.html');
});

// app.all('*',(req,res) => {
//     console.log(req.body);
//     res.sendFile(path.join(__dirname,'public','notFound.html'));
// });

app.listen(PORT,()=>{
    console.log(`server started at ${dayjs(new Date()).format('DD-MM-YY:HH:MM')} on http://localhost:${PORT}`);
    
})