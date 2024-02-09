const fs = require('node:fs/promises');
const path = require('node:path');
const completePath = path.join(__dirname, 'files')

const copy = async () => {
  try {
    const files = await fs.readdir(completePath, { withFileTypes: true })
    await fs.mkdir(path.join(__dirname, 'files-copy'))

    files.forEach(async (el) => {
      if (el.isFile()) {
        await fs.copyFile(path.join(completePath, el.name), `${completePath}/../files-copy/${el.name}`)
      }
    })
  }
  catch (err) {
    console.error('FS operation failed')
  }
}

copy()