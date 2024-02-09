import {argv} from "process"

export const getUsername = () => {
  let username 
  for (let i=0; i < argv.length; i += 1) {
    if (argv[i].startsWith ('--username')) {
      username = `${argv[i].split('=')[1]}`
      }
    }
    return username
}

export const welcomeMessage = () => {
  console.log(`Welcome to the File Manager, ${getUsername()}`)
}
