const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const { MatchMakingUser } = require("../models/matchMakingUser");
const request = require("request");
const rp = require("request-promise");

function searchMatch(mMUser) {
  const isDuplicate = MatchMakingUser.findOne({
    summonerName: mMUser.summonerName,
    practiceChampionSelected: mMUser.practiceChampionSelected
  });

  if (isDuplicate) {
    return null;
  } else {
    return MatchMakingUser.find({
      opponentChampions: mMUser.practiceChampionSelected
    })
      .then(res => {
        let MatchedChampions = [];
        console.log(`res.length : ${res.length}`);

        if (res.length === 0) {
          mMUser.save();
        } else {
          for (let i = 0; i < mMUser.opponentChampions.length; i++) {
            for (let j = 0; j < res.length; j++) {
              if (
                mMUser.opponentChampions[i] === res[j].practiceChampionSelected
              ) {
                MatchedChampions.push(res[j]);
              }
            }
          }
          return MatchedChampions;
        }
      })
      .then(res => {
        if (res.length > 0) {
          let MatchedPlayers = [];
          for (let i = 0; i < res.length; i++) {
            let rankDifference;
            if (mMUser.rank > res[i].rank) {
              rankDifference = mMUser.rank - res[i].rank;
            } else {
              rankDifference = res[i].rank - mMUser.rank;
            }

            if (rankDifference <= 15) {
              const info = {
                summonerName: res[i].summonerName,
                oppponentChampion: res[i].practiceChampionSelected,
                userChampion: mMUser.practiceChampionSelected,
                selectedLane: mMUser.selectedLane,
                rankedStats: `https://app.blitz.gg/lol/profile/${
                  res[i].region
                }1/${res[i].summonerName}`
              };
              MatchedPlayers.push(info);
            }
          }
          return MatchedPlayers;
        }
      })
      .catch(err => {
        console.log(`err: `);
        console.log(err);
      });
  }
}

router.post("/matchMake", async (req, res) => {
  let verification;
  try {
    verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
  } catch (err) {
    res.status(401).send("Key has expired!");
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
  let divisionInNumbers;

  switch (rankedSoloQ.tier) {
    case "BRONZE":
      tierInNumbers = 0;
      break;
    case "SILVER":
      tierInNumbers = 5;
      break;
    case "GOLD":
      tierInNumbers = 10;
      break;
    case "PLATINUM":
      tierInNumbers = 15;
      break;
    case "DIAMOND":
      tierInNumbers = 20;
      break;
    case "MASTER":
      tierInNumbers = 25;
      break;
    case "CHALLENGER":
      tierInNumbers = 30;
      break;
  }

  switch (rankedSoloQ.rank) {
    case 5:
      divisionInNumbers = 0;
      break;
    case 4:
      divisionInNumbers = 1;
      break;
    case 3:
      divisionInNumbers = 2;
      break;
    case 2:
      divisionInNumbers = 3;
      break;
    case 1:
      divisionInNumbers = 4;
      break;
  }

  let finalOpponentChampions = [];
  for (let i = 0; i < req.body.opponentChampions.length; i++) {
    champions = req.body.opponentChampions;
    finalOpponentChampions.push(champions[i].name);
  }

  const matchMakingUser = new MatchMakingUser({
    summonerName: user.summonerName,
    region: user.region,
    rank: tierInNumbers + divisionInNumbers,
    practiceChampionSelected: req.body.practiceChampionSelected[0].name,
    opponentChampions: finalOpponentChampions,
    selectedLane: req.body.selectedLane
  });

  const compatibleSummoner = await searchMatch(matchMakingUser);

  if (compatibleSummoner) {
    res.status(200).send(compatibleSummoner);
  } else {
    res.statusMessage = "Practice champion already exists in players queue";
    res.status(400).end();
  }
});

module.exports = router;
