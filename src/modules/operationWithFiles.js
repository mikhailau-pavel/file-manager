import { createReadStream, createWriteStream } from 'fs'
import { writeFile, rename, unlink, rm } from 'fs/promises'
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


export const copyFile = async (pathToFile, pathToCreateCopy) => {
  try {
    let pathToCopy = path.join(pathToCreateCopy, path.basename(pathToFile))
    const readStream = createReadStream(pathToFile)
    const writeStream = createWriteStream(pathToCopy)
    readStream.pipe(writeStream)
  }
  catch (err) {
    console.error('Operation failed')
    console.error(err)
  }
}

export const deleteFile = async (pathTo) => {
  try {
    await rm(pathTo)
  }
  catch(err) {
      console.log ('Operation failed', err)
  }
}

export const moveFile = async (pathToFile, pathToCreateCopy) => {
  try {
    let pathToCopy = path.join(pathToCreateCopy, path.basename(pathToFile))
    const readStream = createReadStream(pathToFile)
    const writeStream = createWriteStream(pathToCopy)
    const pipeItImSoTired = readStream.pipe(writeStream)
    pipeItImSoTired.on('close', () => {
      rm(pathToFile)
      }
    )
  }
  catch (err) {
    console.error('Operation failed')
    console.error(err)
  }
}

