const { Worker } = require('node:worker_threads');
const path = require('node:path')


const performCalculations = async () => {
  const numberOfCpu = process.env.NUMBER_OF_PROCESSORS;

  let resultsArray = [];

  for (i = 0; i < numberOfCpu; i += 1) {
    const newPromise = new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname,'worker.js'), {
      workerData: 10 + i,
    });
    worker.on('message', (value) => {
      resolve(value)
    });
    worker.on('error', (err) => reject(null));
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
    });
    resultsArray.push(newPromise);
  };

  const promiseResults = await Promise.allSettled(resultsArray)
  const result = []
  promiseResults.forEach(el => {
    const value = {
      status: el.status === "fulfilled" ? 'resolved' : 'error',
      data: el.reason === null ? el.reason : el.value
    }
    result.push(value)
  })
  console.log(result)
}

performCalculations();