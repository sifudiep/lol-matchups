const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { MatchMade } = require("../models/MatchMade");

router.post("/newMatchResponse", async (req, res) => {
  console.log(`newMatchResponse called`);
  console.log(req.body);
  MatchMade.findById(req.body.matchId, (err, match) => {
    if (err) return err;
    if (match.summonerOne.summonerName === req.body.summonerName) {
      if (
        match.summonerTwo.accept === "false" ||
        req.body.response === "false"
      ) {
        match.remove();
        res.status(200).send("Removed!");
      } else {
        match.summonerOne.accept = req.body.response;
        console.log(`summonerOne.accept : ${match.summonerTwo.accept}`);
        match.save();
        res.status(200).send(match);
      }
    } else {
      if (
        match.summonerOne.accept === "false" ||
        req.body.response === "false"
      ) {
        match.remove();
        res.status(200).send("Removed!");
      } else {
        match.summonerTwo.accept = req.body.response;
        console.log(`summonerTwo.accept : ${match.summonerTwo.accept}`);
        match.save();
        res.status(200).send(match);
      }
    }
  });
});

module.exports = router;
