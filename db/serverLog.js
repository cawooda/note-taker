const serverLog = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const dayjs = require('dayjs');
const handleFileUpdate =  require('./../helpers/handlFileUpdate');
const logsTo = 'db';

serverLog.all('/',(req,res)=>{
    const newLog = {
        id: uuid(),
        time: dayjs(new Date()).format('DD-MM-YY:hh:mm:ss'),
        requestType: req.method
    }
    handleFileUpdate(__dirname,logsTo,newLog);
    
});

module.exports = serverLog;