const fs = require('fs/promises');
const path = require('path');

async function handleFileUpdate (filePath,dbFile,writeObject) {

    //creates a path to the file, knowing this function is called from a different location but should always reference from where it is called.
    console.log(path.join(filePath,'..',dbFile,`${dbFile}.json`));

    const refPath = path.join(filePath,'..',dbFile,`${dbFile}.json`);
    
    const currentContents = await fs.readFile(refPath);
    const currentContentsJSON = await JSON.stringify(currentContents);
    console.log(currentContents);
    const newContents = ([]).push(currentContents);
    await fs.writeFile(refPath,JSON.stringify(newContents));
    return true;
}

module.exports = handleFileUpdate;