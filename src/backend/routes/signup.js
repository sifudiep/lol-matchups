const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();


// Signup user
router.post("/signup", async (req, res) => {
  console.log(req.body)
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.send("Email used");

  user = new User({
    summonerName: req.body.summonerName,
    email: req.body.email,
    password: req.body.password,
    region: req.body.region,
    active: req.body.active
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();    
  } catch (err) {
    console.log("user.save");
  }

  return res.send(user);
});

module.exports = router;
