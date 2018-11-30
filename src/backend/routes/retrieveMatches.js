const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../services/keys");
const { MatchMade } = require("../models/MatchMade");

router.post("/retrieveMatches", async (req, res) => {
  let verification;
  try {
    verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
  } catch (err) {
    res.status(401).send("Key has expired... probably");
  }
  let matches = [];
  MatchMade.find({}, (err, allMatches) => {
    if (err) {
      console.log(`err`);
      console.log(err);
    } else {
      for (let i = 0; i < allMatches.length; i++) {
        const match = allMatches[i];
        if (
          match.summonerOne.summonerName === req.body.summonerName ||
          match.summonerTwo.summonerName === req.body.summonerName
        ) {
          console.log(`match: ${match}`);
          matches.push(match);
        }
      }
      res.status(200).send(matches);
    }
  });
});

module.exports = router;
