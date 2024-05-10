const fs = require('fs/promises');
const path = require('path');

const initLog = {
    
}

async function handleFileUpdate (dbFile,writeObject) {

    //creates a path to the file, knowing this function is called from a different location but should always reference from where it is called.
    const refPath = path.join(__dirname,'..','db',`${dbFile}.json`);

    console.log("refpath",refPath);
    var fileContents = await fs.readFile(refPath,"utf8");
    console.log("file contents", fileContents);
    if (!fileContents) fileContents = "[1,2,3]";
    
    const fileContentsJSON = JSON.parse(fileContents);
    
    fileContentsJSON.push(writeObject);
    console.log("new contents",fileContentsJSON);
    await fs.writeFile(refPath,JSON.stringify(fileContentsJSON));
    return 'status OK';
}

module.exports = handleFileUpdate;