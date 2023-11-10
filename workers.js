const { parentPort, workerData } = require("worker_threads");

// console.log("worker data", workerData);
const { start, end } = workerData;

let counter = start;
for (let i = 0; i < end; i++) {
  console.log(`counter - ${counter}`);
  counter++;
}

parentPort.postMessage(counter);
