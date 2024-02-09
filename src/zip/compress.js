const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib')

const compress = async () => {
  await pipeline(
    fs.createReadStream('src/zip/files/fileToCompress.txt'),
    zlib.createGzip(),
    fs.createWriteStream('src/zip/files/archive.gz')
  )
};

compress();