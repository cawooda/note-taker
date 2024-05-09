
describe('handleFileUpdate', () => {
    test('accepts an object and returns a status OK', async () => {
        
        const handlFileUpdate = require('./handleFileUpdate')
        const path = require('path');
        const filePath = path.join(__dirname);
        const logsTo = 'db';
        const object = {
            this:"that",
            that:"this"
        }

        const result = await handlFileUpdate(filePath,'db',object)
        expect(result).toBe('status OK');
    });

    test('should produce a file containing 1 object', async () => {
        
        const handlFileUpdate = require('./handleFileUpdate')
        const handlFileRead = require('./handleFileRead')
        const path = require('path');
        const filePath = path.join(__dirname);
        const logsTo = '';
        console.log("filepath",filePath);
        
        const object = {
            this:"that"
        }
        
        const test = await handlFileUpdate(filePath,'db',object)
        const result = await handlFileRead(filePath,'db');
        
        expect(result).toBe('[{this:"that"}]');
        
    });
  });