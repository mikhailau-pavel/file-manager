const fs = require('node:fs/promises')
const path = require('node:path')

const create = async () => {
  try {
    await fs.writeFile(path.join(__dirname,'/files/fresh.txt'),'I am fresh and young', { flag: 'wx' })
  }
  catch (err) {
    console.error('FS operation failed')
  }
}

create()

