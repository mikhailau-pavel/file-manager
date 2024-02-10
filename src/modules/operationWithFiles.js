import { createReadStream } from 'fs'
import { writeFile, rename } from 'fs/promises'
import { stdout, cwd } from 'process'
import { showCurrentDirectory } from '../script.js'
import path from 'path'


export const readFile = async (pathTo) => {
  try {
    const read = createReadStream(pathTo)
    read.on('data', (chunk) => {
      stdout.write(chunk)
      }
    )
    read.on('end', () => {
      showCurrentDirectory()
      }
    )
  }
  catch (error) {
    console.log(error)
    console.log('Future Operation failed function here')
  }
}

export const createEmptyFile = async (newFileName) => {
  try {
    await writeFile(path.join(cwd(), newFileName),'', { flag: 'wx' })
  }
  catch (err) {
    console.error(err)
    console.error('Operation failed')
  }
}

export const renameFile = async (pathTo, newFileName) => {
  try {
      let renameFileTo =  pathTo.split('\\')
      renameFileTo.pop()

      await rename(pathTo, path.join(renameFileTo.join('\\'), newFileName))
    }
    catch(err2) {
      console.log ('Operation failed')
      console.log (err2)
    }
}



