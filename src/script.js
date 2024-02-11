import { chdir, cwd, exit, stdin  } from "process"
import { homedir } from "os"
import { welcomeMessage } from "./modules/welcomeMessage.js"
import { exitMessage } from "./modules/exitMessage.js"
import { getUsername } from '../src/modules/welcomeMessage.js'
import { upperDir, goToDir, listOfFiles } from '../src/modules/navigation.js'
import { readFile, createEmptyFile, renameFile, copyFile, deleteFile, moveFile } from '../src/modules/operationWithFiles.js'
import { calcHash } from "./modules/hash.js"
import { compress, decompress } from './modules/compression.js'
import { getEOL, getCPU, getHomeDir, getUsernameInfo, getArchitecture } from './modules/os.js'
 
const goToHomeDir = () => {
  chdir(homedir())
}
goToHomeDir()

export const showCurrentDirectory = () => {
  console.log(`\nYou are currently in ${cwd()}`)
}

const readCommand = () => {
  console.log(`${getUsername()}, print a command and wait for results:`)
  stdin.on('data', async (data) => {

    let currentCommand = data.toString().trim().split(' ')

    const [command, firstArg, secondArg] = currentCommand
      .filter((el) => el !== "")
      .map((el) => el.trim())

      switch (command) {
        case 'up' :
          upperDir()
          showCurrentDirectory()
          break
        case 'cd' :
          goToDir(firstArg)
          showCurrentDirectory()
          break
        case 'ls' :
          await listOfFiles()
          showCurrentDirectory()
          break
        case 'cat' :
          readFile(firstArg)
          showCurrentDirectory()
          break
        case 'add' :
          createEmptyFile(firstArg)
          showCurrentDirectory()
          break
        case 'rn' :
          renameFile(firstArg, secondArg)
          showCurrentDirectory()
          break
        case 'cp' :
          copyFile(firstArg, secondArg)
          showCurrentDirectory()
          break
        case 'rm' :
          deleteFile(firstArg)
          showCurrentDirectory()
          break
        case 'mv' :
          moveFile(firstArg, secondArg)
          showCurrentDirectory()
          break
        case 'hash' :
          calcHash(firstArg)
          break
        case 'compress' :
          compress(firstArg, secondArg)
          showCurrentDirectory()
          break
        case 'decompress' :
          decompress(firstArg, secondArg)
          showCurrentDirectory()
          break
        case 'os' :
          switch(firstArg) {
            case '--EOL' :
              getEOL()
              showCurrentDirectory()
              break
            case '--cpus' :
              getCPU()
              showCurrentDirectory()
              break
            case '--homedir' :
              getHomeDir()
              showCurrentDirectory()
              break
            case '--username' :
              getUsernameInfo()
              showCurrentDirectory()
              break
            case '--architecture' :
              getArchitecture()
              showCurrentDirectory()
              break
            default :
              console.log(`Invalid input, ${getUsername()}, print a command and wait for results:`)
          }
          break  
        default :
        console.log(`Invalid input, ${getUsername()}, print a command and wait for results:`)  
      }
  })
}

welcomeMessage()
exitMessage()
goToHomeDir()
showCurrentDirectory()
readCommand()