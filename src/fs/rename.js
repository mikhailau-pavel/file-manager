const fs = require('node:fs/promises')
const path = require('node:path')

const pathToTheFile = path.join(__dirname,'files/wrongFilename.txt')

const rename = async () => {
  try {
    await fs.access(path.join(__dirname,'files/properFilename.md'))
    console.log('FS operation failed')
  }
  catch(err) {
    try {
      await fs.rename(pathToTheFile, path.join(__dirname,'files/properFilename.md'))
    }
    catch(err2) {
      console.log ('FS operation failed')
    }
  }
}

rename()