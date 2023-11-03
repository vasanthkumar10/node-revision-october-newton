const express = require("express");
const app = express();
const cars = require("./routes/cars");
const config = require("config");
require("dotenv").config();

console.log("config", config);

// to access body content
app.use(express.json());

app.use("/cars", cars);

// custom middleware
app.use(function middleware(req, res, next) {
  req.superman = "vasanth";
  console.log("middleware fn");
  next();
});

app.get("/", (req, res, next) => {
  console.log("home page", req.superman);
  //   console.log("req", req);
  //   console.log("=".repeat(60));
  //   console.log("res", res);
  return res.send("home page");
});

const PORT = config.get("port");
app.listen(PORT, () => console.log(`listening to port ${PORT}....`));
