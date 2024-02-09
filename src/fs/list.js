const fs = require('node:fs/promises');
const path = require('node:path')

const completePath = path.join(__dirname, 'files')

const list = async () => {
  try {
    const files = await fs.readdir(completePath, { withFileTypes: true })
    files.forEach(async (el) => {
      if (el.isFile()) {
        const name = el.name.split('.')[0]
        console.log(`${name}`)
      }
    })
  }
  catch (err) {
    console.error('FS operation failed')
  }
}

list()
