const parseEnv = () => {
  let rightFormatOutput = ''
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith ('RSS_')) {
      rightFormatOutput += `${key} = ${value}; `
      }
    }
    console.log(rightFormatOutput)  
};

parseEnv();