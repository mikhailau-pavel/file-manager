const fs = require('node:fs');
const { stdin } = require('node:process');
const path = require('node:path');


const write = async () => {
  const writeStream = fs.createWriteStream(path.join(__dirname, 'files/fileToWrite.txt'))
  stdin.pipe(writeStream);
};
write();