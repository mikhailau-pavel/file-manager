import { chdir, cwd, exit, stdin  } from "process"
import { homedir } from "os"
import { welcomeMessage } from "./modules/welcomeMessage.js"
import { exitMessage } from "./modules/exitMessage.js"
import { getUsername } from '../src/modules/welcomeMessage.js'
import { upperDir } from '../src/modules/navigation.js'
 
const goToHomeDir = () => {
  chdir(homedir())
}
goToHomeDir()

const showCurrentDirectory = () => {
  console.log(`You are currently in ${cwd()}`)
}

const readCommand = () => {
  console.log(`${getUsername()}, print a command and wait for results:`)
  stdin.on('data', (data) => {

    let currentCommand = data.toString().trim().split(' ')

    const [command, firstArg, secondArg] = currentCommand
      .filter((el) => el !== "")
      .map((el) => el.trim())

      switch (command) {
        case 'up' :
          upperDir()
          showCurrentDirectory()
        default :
        console.log(`Invalid input, ${getUsername()}, print a command and wait for results:`)  
      }
  })
}

welcomeMessage()
exitMessage()
goToHomeDir()
//showCurrentDirectory()
readCommand()