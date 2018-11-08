const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const request = require("request");
const rp = require("request-promise");

router.post("/matchMake", async (req, res) => {
  try {
    let verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
    let user = await User.findOne({ _id: verification._id });
    request(
      `http://euw.op.gg/summoner/userName=${user.summonerName}`,
      (err, res, body) => {
        console.log(`RES: `);
        console.log(res);
        console.log(`BODY`);
        console.log(body);
      }
    );
    res.send(user);
  } catch (err) {
    console.log(`Key has expired!`);
  }
});

module.exports = router;
