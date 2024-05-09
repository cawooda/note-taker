const fs = require('fs/promises');
const path = require('path');

const initLog = {
    
}

async function handleFileRead (filePath,dbFile) {

    //creates a path to the file, knowing this function is called from a different location but should always reference from where it is called.
    const refPath = path.join(filePath,'..','db',`${dbFile}.json`);
    console.log("refpath",refPath);
    var fileContents = await fs.readFile(refPath,"utf8");
    console.log("file contents", fileContents);
    if (!fileContents) fileContents = "[]";
    
    const fileContentsJSON = JSON.parse(fileContents);
    console.log("file contents JSON", fileContentsJSON);
    return fileContentsJSON;
}


module.exports = handleFileRead;