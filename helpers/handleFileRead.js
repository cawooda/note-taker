const fs = require('fs/promises');
const path = require('path');

async function handleFileRead (filePath,dbFile) {

    //creates a path to the file, knowing this function is called from a different location but should always reference from where it is called.
    console.log(path.join(filePath,'..',dbFile,`${dbFile}.json`));

    const refPath = path.join(filePath,'..',dbFile,`${dbFile}.json`);
    
    const currentContents = await fs.readFile(refPath,"utf8", function(err, data) {console.error(err,data)});
    const currentContentsString = await JSON.stringify(currentContents);
    
    return currentContentsString;
}

module.exports = handleFileRead;