import { chdir, cwd, exit, stdin  } from "process"
import { homedir } from "os"
import { welcomeMessage } from "./modules/welcomeMessage.js"
import { exitMessage } from "./modules/exitMessage.js"
import { getUsername } from '../src/modules/welcomeMessage.js'

const goToHomeDir = () => {
  chdir(homedir())
}
goToHomeDir()

const showCurrentDirectory = () => {
  console.log(`You are currently in ${cwd()}`)
}

const readCommand = () => {
  //console.log(`${getUsername()}, print a command and wait for results:`)
  stdin.on('data', (data) => {
    let currentCommand = data.toString().trim().split(' ')
    const [command, firstArg, secondArg] = currentCommand
      .filter((el) => el !== "")
      .map((el) => el.trim())
  })
}

welcomeMessage()
exitMessage()
goToHomeDir()
showCurrentDirectory()
readCommand()