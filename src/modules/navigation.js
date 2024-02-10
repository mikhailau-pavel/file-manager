import { parse } from "path"
import { cwd, chdir } from "process"

export const upperDir = () => {
  const { root } = parse(cwd())
  const [disk, folders] = cwd().split(':')
  const pathTo = folders.split('\\')

  if (cwd() === root) {
    //console.log('Root directory')
    return 
  } else { 
    pathTo.pop()
    if (pathTo.length === 1) {
      chdir('\\')
    } else {
      chdir(pathTo.join('\\'))
    }
  }
}