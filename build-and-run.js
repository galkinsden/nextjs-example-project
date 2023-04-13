const { exec } = require('child_process');

const executeNextjs = exec('./build-and-run.sh', (error, _, stderr) => {
  if (error) {
    console.log(`error: ${error}`);
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});

executeNextjs.stdout.on('data', function(data) {
  console.log(data.toString()); 
});