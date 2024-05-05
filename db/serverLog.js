const router = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const dayjs = require('dayjs');
const logFile =  require('./../helpers/handlFileUpdate');
const logsTo = 'db';

router.all('/',(req,res)=>{
    const newLog = {
        id: uuid(),
        time: dayjs(new Date()).format('DD-MM-YY:hh:mm:ss'),
        requestType: req.method
    }
    logFile(logsTo,`${logFile}`,newLog);
    
});

module.exports = serverLog;