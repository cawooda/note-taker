const PORT = 3001;
const dayjs = require('dayjs');

const staticOptions = {
    maxAge : '1d'
}   
const path = require('path');
const express = require('express');
const app = express();
const serverLog = require('./db/serverLog')
const apiRoute = require('./api/api')

//middlewhere
app.use(express.static('public'))
app.use(serverLog);

//routes
app.use('/api',apiRoute);



app.get('/', function(req, res){
    res.redirect('public/index.html');
});

app.all('*',(req,res) => {
    res.sendFile(path.join(__dirname,'public','notFound.html'));
});

app.listen(PORT,()=>{
    console.log(`server started at ${dayjs(new Date()).format('DD-MM-YY:HH:MM')} on http://localhost:${PORT}`);
    
})