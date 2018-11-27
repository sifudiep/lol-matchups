const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const rp = require("request-promise");
const { MatchMade } = require("../models/MatchMade");

router.get("/retrieveMatches", (req, res) => {
  let matches = [];
  console.log(req.body);
  MatchMade.find({ summonerName: req.body.summonerName }, (err, match) => {
    if (err) {
      console.log(`err`);
      console.log(err);
    } else {
      matches.push(match);
      console.log(`pushed a match ! :`);
      console.log(match);
    }
  });
  res.send({ matches });
});

module.exports = router;
