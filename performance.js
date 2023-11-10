const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hitting the server");
  return res.send("server");
});

app.get("/intensive", (req, res) => {
  let counter = req.body.start;
  for (let i = 0; i < req.body.end; i++) {
    console.log(`counter - ${counter}`);
    counter++;
  }
  return res.json({ counter });
});

// workers
// const { Worker } = require("worker_threads");

// app.get("/intensive", (req, res) => {
//   const { start, end } = req.body;
//   const worker = new Worker("./workers.js", {
//     workerData: {
//       start,
//       end,
//     },
//   });
//   //   console.log("worker", worker);

//   worker.on("message", (data) => {
//     return res.json({
//       counter: data,
//     });
//   });
// });

module.exports.run = function () {
  app.listen(5000, () => console.log("listening on 5000......"));
};
