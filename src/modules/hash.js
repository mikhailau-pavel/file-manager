import { showCurrentDirectory } from '../script.js'
import crypto from "crypto"
import { createReadStream } from 'fs'
import { stdout } from "process"

export const calcHash = async (pathTo) => {

const read = createReadStream(pathTo)
  read.on('data', (chunk) => {
    const hexed = crypto.createHash('sha256').update(chunk).digest('hex')
    stdout.write(hexed)
    }
  )
  read.on('end', () => {
    showCurrentDirectory()
    }
  )  
}
