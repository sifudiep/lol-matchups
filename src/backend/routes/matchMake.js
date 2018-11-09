const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const { MatchMakingUser } = require("../models/matchMakingUser");
const request = require("request");

router.post("/matchMake", async (req, res) => {
    let verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
    if (!verification) res.status(400).send("Key has expired!");
    let user = await User.findOne({ _id: verification._id });
    if (!user) res.status(400).send("User not found");

    // Hård kodat rank
    const matchMakingUser = new MatchMakingUser({
      summonerName: user.summonerName,
      region: user.region,
      rankDifference: 5,
      division: 5,
      tier: 3,
      practiceChampionSelected: req.body.practiceChampionSelected,
      opponentChampions: req.body.opponentChampions,
      selectedLane: req.body.selectedLane,
    }) 

    await matchMakingUser.save()

    res.send(matchMakingUser);
  
});

module.exports = router;
