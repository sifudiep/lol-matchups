const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

// Authenticates user by receiving a JWT and verificating it, returns user from MongoDB with _id.
router.post("/auth", async (req, res) => {
  try {
    const verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
    res.send(verification);
  } catch (err) {
    res.status(400).send("Key has expired!");
  }
});

module.exports = router;
