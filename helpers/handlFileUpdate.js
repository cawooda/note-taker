const fs = require('fs/promises');
const path = require('path');

module.exports = async ({filePath,dbFile,writeObject}) => {
    const refPath = path.join(__dirname,'..',dbFile);
    console.log("refPath", refPath);
    const currentContents = await fs.readFile(refPath);
    const newContents = ([]).push(currentContents);
    await fs.writeFile(refPath,JSON.stringify(newContents));
    return true;
}