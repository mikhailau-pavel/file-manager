import { EOL, cpus, homedir, userInfo, arch } from 'os'
import { stdout } from 'process'

export const getEOL = () => {
  stdout.write(JSON.stringify(EOL))
}

export const getCPU = () => {
  const cpu = cpus()
  const amountCPU = cpu.length
  stdout.write(`Overall amount of CPUs: ${amountCPU}\n`)
  cpu.map(({model, speed}) => (console.log({'Model': model, 'Clock rate': speed})))
}

export const getHomeDir = () => {
  stdout.write(homedir())
}

export const getUsernameInfo = () => {
  const username = userInfo().username
  stdout.write(username)
}

export const getArchitecture = () => {
  stdout.write(arch())
}