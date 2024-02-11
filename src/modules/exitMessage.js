import { stdin, stdout, exit } from 'process'
import { getUsername } from '../modules/welcomeMessage.js'

export const exitMessage = () => {
  stdin.on('data', (data) => {
    if (data.toString().trim() === '.exit') {
      stdout.write(`Thank you for using File Manager, ${getUsername()}, goodbye!`)
      exit()
    }
  })
  process.on('SIGINT', () => {
    stdout.write(`Thank you for using File Manager, ${getUsername()}, goodbye!`)
    exit()
})
}
exitMessage()