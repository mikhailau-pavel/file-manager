import path from 'path'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream } from 'fs'
import { createBrotliCompress, createBrotliDecompress } from 'zlib'

export const compress = async (pathToFile, pathToCreatedArchive) => {
  let compressedFile = path.join(pathToCreatedArchive, `${path.basename(pathToFile)}.br`)
  await pipeline(
    createReadStream(pathToFile),
    createBrotliCompress(),
    createWriteStream(compressedFile)
  )
}

export const decompress = async (pathToFile, pathToDecompressedFile) => {
  let decompressedFile = path.join(pathToDecompressedFile, path.basename(pathToFile,'.br'))
  console.log(decompressedFile)
  await pipeline(
    createReadStream(pathToFile),
    createBrotliDecompress(),
    createWriteStream(decompressedFile)
  )
}