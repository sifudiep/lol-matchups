const { User } = require("../models/user");
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.get("/me", async (req, res) => {
  try {
    const verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
  } catch (err) {
    res.status(400).send("Key has expired!");
  }
});

module.exports = router;
