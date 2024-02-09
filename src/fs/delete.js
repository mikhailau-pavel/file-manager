const fs = require('node:fs/promises')
const path = require('node:path')

const remove = async () => {
  try {
    await fs.unlink(path.join(__dirname,'files/fileToRemove.txt'))
  }
  catch(err) {
      console.log ('FS operation failed')
  }
}

remove()
