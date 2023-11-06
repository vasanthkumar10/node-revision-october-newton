// crypto

// const crypto = require("crypto");

// // pbkdf -> password based key derivation function
// // SHA -> Secured Hashing Algorithm
// const start = Date.now();
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // console.log(Date.now() - start);
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // console.log(Date.now() - start);

// const os = require("os");
// // console.log(os.cpus().length);

// // by default = 4
// process.env.UV_THREADPOOL_SIZE = 15;

// for (let i = 0; i < 15; i++) {
//   //   crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
//   // async
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(Date.now() - start);
//   });
// }

// const os = require("os");
// // console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.networkInterfaces());

// Event driven architecture
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // listening to the event
// emitter.on("message", () => {
//   console.log("Message received from client");
// });

// emitter.on("message", () => {
//   console.log("Second listener");
// });

// emitter.on("eventWithArgs", (...args) => {
//   console.log("event with args", args);
// });

// // trigger / emit an event
// // emitter.emit("user-created");
// // emitter.emit("message");
// emitter.emit("eventWithArgs", "dasdasdas", 122);

// const fs = require("fs");
// fs.readdir("./", (err, files) => {
//   console.log(files);
// });

// const data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);

// fs.readFile("./demo.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// write the data
// const data = {
//   name: "vasanth",
//   age: 10,
// };

// fs.writeFile("data.js", JSON.stringify(data), (err, data) => {
//   console.log("file saved");
// });
