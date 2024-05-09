const serverLog = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const dayjs = require('dayjs');
const handleFileUpdate =  require('./../helpers/handlFileUpdate');
const logsTo = 'serverLog';

serverLog.all('/',(req,res)=>{
    const newLog = {
        id: uuid(),
        time: dayjs(new Date()).format('DD-MM-YY:hh:mm:ss'),
        requestType: req.method
    }
    console.log("(__dirname,logsTo,newLog)", __dirname,logsTo,newLog);
    handleFileUpdate(__dirname,logsTo,newLog);
    
});

module.exports = serverLog;