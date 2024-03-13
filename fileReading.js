const fs = require('fs');

const readableStream = fs.createReadStream(`input.txt`,"utf-8");

const writeableStream = fs.createWriteStream(`output.txt`,"utf-8");

readableStream.pipe(writeableStream);

readableStream.on('error', (err) => {
    console.error('Error reading input file:', err);
  });
  
  writeableStream.on('error', (err) => {
    console.error('Error writing to output file:', err);
  });
  
  // Once writing is finished, log a success message
  writeableStream.on('finish', () => {
    console.log('Data has been written to', `output.txt`);
  });