import {argv} from "process"

export const getUsername = () => {
  try {
    let username 
  for (let i=0; i < argv.length; i += 1) {
    if (argv[i].startsWith ('--username')) {
      username = `${argv[i].split('=')[1]}`
      }
    }
    if (username === '') {
      username = 'mystery person'
    }
    return username[0].toUpperCase() + username.slice(1)
  } 
  catch(err) {
    console.log(err)
    console.log('Operation failed')
  }
}


export const welcomeMessage = () => {
  console.log(`Welcome to the File Manager, ${getUsername()}`)
}
