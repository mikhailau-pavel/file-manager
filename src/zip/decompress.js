const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib')

const decompress = async () => {
  await pipeline(
    fs.createReadStream('src/zip/files/archive.gz'),
    zlib.Unzip(),
    fs.createWriteStream('src/zip/files/fileToCompress.txt')
  )
};

decompress();