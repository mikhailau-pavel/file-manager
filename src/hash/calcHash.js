const path = require('node:path')
const crypto = require('node:crypto')
const fs = require('node:fs')
const { stdout } = require('node:process')

const read = async () => {

const read = fs.createReadStream(path.join(__dirname, 'files/fileToCalculateHashFor.txt'))
  read.on('data', (chunk) => {
    const hexed = crypto.createHash('sha256').update(chunk).digest('hex')
    stdout.write(hexed)
  }
)
}

read()