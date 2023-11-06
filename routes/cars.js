const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.get("/", (req, res) => {
  console.log("returning get cars");
  return res.json({
    data: ["audi", "bmw"],
  });
});

router.post("/", validate, (req, res) => {
  console.log("returning post cars");
  // console.log("body", req.body);

  // schema definition
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    age: Joi.number().required(),
  });

  // validate
  const { error } = schema.validate(req.body);
  // console.log(result);
  if (error) return res.status(400).send(error.details[0].message);

  return res.json({
    data: ["audi", "bmw", "benz"],
  });
});

module.exports = router;
