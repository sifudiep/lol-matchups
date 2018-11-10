const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const { MatchMakingUser } = require("../models/matchMakingUser");
const request = require("request");
const rp = require("request-promise");

router.post("/matchMake", async (req, res) => {
  let verification;
  try {
    verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
  } catch (err) {
    res.status(400).send("Key has expired!");
  }

  let user = await User.findOne({ _id: verification._id });

  let summonerJSON = await rp(
    `https://blitz.iesdev.com/api/lolapi/euw1/accounts/name/${
      user.summonerName
    }?force=true`
  );

  let summoner = JSON.parse(summonerJSON);
  let summonerID = summoner.data.id;

  let rankJSON = await rp(
    `https://blitz.iesdev.com/api/lolapi/euw1/league_positions/${summonerID}?force=true`
  );
  let rank = JSON.parse(rankJSON);

  const rankedSoloQ = rank.data[1];

  let tierInNumbers;

  switch (rankedSoloQ.tier) {
    case "BRONZE":
      tierInNumbers = 0;
      break;
    case "SILVER":
      tierInNumbers = 1;
      break;
    case "GOLD":
      tierInNumbers = 2;
      break;
    case "PLATINUM":
      tierInNumbers = 3;
      break;
    case "DIAMOND":
      tierInNumbers = 4;
      break;
    case "MASTER":
      tierInNumbers = 5;
      break;
    case "CHALLENGER":
      tierInNumbers = 6;
      break;
  }

  const matchMakingUser = new MatchMakingUser({
    summonerName: user.summonerName,
    region: user.region,
    rankDifference: 5,
    division: rankedSoloQ.rank,
    tier: tierInNumbers,
    practiceChampionSelected: req.body.practiceChampionSelected,
    opponentChampions: req.body.opponentChampions,
    selectedLane: req.body.selectedLane
  });

  await matchMakingUser.save();

  res.status(200).send(matchMakingUser);
});

module.exports = router;
