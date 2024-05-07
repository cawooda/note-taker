
describe('handleFileUpdate', () => {
    test('accepts an object and returns a status OK', () => {
        
        const handlFileUpdate = require('./handlFileUpdate')
        const path = require('path');
        const filePath = path.join(__dirname);
        
        console.log("filepath",filePath);
        const object = {
            filePath: path.join(__dirname,path.parse(__filename).name,'json'),
            dbFile: "handleFileUpdate",
            writeObject: {this:"that",this:"that"}
        }


        expect(handlFileUpdate(filePath,'handleFileUpdate.test',object)).toBe(true);
    });
  });