const parseArgs = () => {
  let rightFormatOutput = ''
  for (let i=0; i < process.argv.length; i += 1) {
    if (process.argv[i].startsWith ('--')) {
      rightFormatOutput += `${process.argv[i]} is ${process.argv[i + 1]}, `
      }
    }
    console.log(rightFormatOutput)  
}

parseArgs()