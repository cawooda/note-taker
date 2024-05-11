const fs = require('fs/promises');
const path = require('path');
const FILE = path.join(__dirname,"..","db","db.json");

const initLog = {
    
}

async function handleFileRead () {
    fileContents = await fs.readFile(FILE,'utf8');
    return fileContents;
}

async function handleAddObject (writeObject) {
    const fileContents = await handleFileRead();
    console.log("file contents", fileContents);
    jsonContents = await JSON.parse(fileContents);
    jsonContents.push(writeObject);
    const stringContents = await JSON.stringify(jsonContents);
    fs.writeFile(FILE,stringContents);
}

module.exports = {
    handleAddObject, 
    handleFileRead
}