const fs = require('fs/promises');
const path = require('path');

async function handleFileUpdate (filePath,dbFile,writeObject) {

    //creates a path to the file, knowing this function is called from a different location but should always reference from where it is called.
    // console.log(path.join(filePath,'..',dbFile,`${dbFile}.json`));

    const refPath = path.join(filePath,'..',dbFile,`${dbFile}.json`);
    
    const fileContents = await fs.readFile(refPath,"utf8", function(err, data) {console.error(err,data)});
    console.log("read content", fileContents);
    
    const fileContentsJSON = await JSON.stringify(fileContents);
    console.log('read content json',JSON.stringify(fileContentsJSON));
    
    const newContents = fileContentsJSON.push(writeObject);
    
    await fs.writeFile(refPath,JSON.stringify(newContents));
    return 'status OK';
}

module.exports = handleFileUpdate;