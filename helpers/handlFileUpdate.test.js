
describe('handleFileUpdate', () => {
    test('accepts an object and returns a status OK', () => {
        
        const handlFileUpdate = require('handleFileUpdate')
        const path = require('path');

        
        console.log(path.join(__dirname,path.parse(__filename).name,'json'));
        const object = {
            filePath: path.join(__dirname,path.parse(__filename).name,'json'),
            dbFile: "handleFileUpdate",
            writeObject: {this:"that",this:"that"}
        }


        expect(handleFileUpdate).toBe(true);
    });
  });