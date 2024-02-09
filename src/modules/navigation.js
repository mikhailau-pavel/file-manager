
export const upperDir = () => {
  const { root } = parse(cwd())
  const [disk, folders] = cwd().split(':')
  const pathTo = folders.split('\\')

  if (cwd() === root) {
    return
  } else { 
    pathTo.pop()
    if (pathTo.length === 1) {
      chdir('\\');
    } else {
      chdir(pathTo.join('\\'))
    }
  }
}