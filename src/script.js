import { chdir, cwd, exit, stdin  } from "process"
import { homedir } from "os"
import { welcomeMessage } from "./modules/welcomeMessage.js"
import { exitMessage } from "./modules/exitMessage.js"
import { getUsername } from '../src/modules/welcomeMessage.js'
import { upperDir, goToDir, listOfFiles } from '../src/modules/navigation.js'
import { readFile, createEmptyFile, renameFile } from '../src/modules/operationWithFiles.js'
 
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