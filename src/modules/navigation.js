import { parse } from "path"
import { cwd, chdir } from "process"
import { readdir } from "fs/promises"

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

export const goToDir = (pathTo) => {
      chdir(pathTo)
  }

  export const listOfFiles = async () => {
    try {
      const files = await readdir(cwd(), { withFileTypes: true })
      files.forEach(async (el) => {
        const fileName = el.name 
        const fileType = el.isDirectory() ? "directory" : "file"
        el.type = fileType
      })
      files.sort((firstElement, secondElement) => {
        if (firstElement.name.toLowerCase() < secondElement.name.toLowerCase()) {
          return -1
        }
        if (firstElement.name.toLowerCase() > secondElement.name.toLowerCase()) {
          return 1
        }
        return 0
      })
      
      files.sort ((firstElement, secondElement) => {
        if (firstElement.type === "directory" && secondElement.type === "file") {
          return -1
        }
        if (firstElement.type === "file" && secondElement.type === "directory") {
          return 1
        }
          return 0
      })
      console.table(files, ['name' , 'type'])
    }
    catch (err) {
      console.error(err)
    }
  }