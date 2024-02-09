const { spawn } = require('node:child_process');
const path = require('node:path');
const { stdin, stdout } = require ('node:process')

const pathToChild = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [pathToChild, ...args]);
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

spawnChildProcess([]);