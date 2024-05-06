const fs = require('fs/promises');
const path = require('path');

async function handleFileUpdate (filePath,dbFile,writeObject) {
    console.log(path.join(filePath,'..',dbFile,`${dbFile}.json`));
    const refPath = path.join(filePath,'..',dbFile,`${dbFile}.json`);
    
    const currentContents = await fs.readFile(refPath);
    
    const newContents = ([]).push(currentContents);
    await fs.writeFile(refPath,JSON.stringify(newContents));
    return true;
}

module.exports = handleFileUpdate;