const cluster = require("cluster");
const os = require("os");
const { run } = require("./performance");

if (cluster.isWorker) {
  run();
} else {
  os.cpus().forEach(() => cluster.fork());
}
