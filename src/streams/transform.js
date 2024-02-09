const { Transform } = require("node:stream");
const path = require('node:path');
const { stdin, stdout } = require('node:process');

const transform = async () => {
  const newTransform = new Transform ({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n')
    }
  })
  stdin.pipe(newTransform).pipe(stdout)
};

transform();