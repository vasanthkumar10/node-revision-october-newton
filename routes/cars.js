const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("returning get cars");
  return res.json({
    data: ["audi", "bmw"],
  });
});

router.post("/", (req, res) => {
  console.log("returning post cars");
  return res.json({
    data: ["audi", "bmw", "benz"],
  });
});

module.exports = router;
