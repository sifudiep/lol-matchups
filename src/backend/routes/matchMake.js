const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const keys = require("../services/keys");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const { MatchMakingUser } = require("../models/matchMakingUser");
const { MatchMade } = require("../models/MatchMade");
const request = require("request");
const rp = require("request-promise");
const MS = require("../services/MessageStrings");

async function searchMatch(mMUser) {
  let isDuplicate;
  try {
    isDuplicate = await MatchMakingUser.find({
      summonerName: mMUser.summonerName,
      practiceChampionSelected: mMUser.practiceChampionSelected
    });
  } catch (err) {
    return MS.Duplicate;
  }

  if (isDuplicate.length === 0) {
    return MatchMakingUser.find({
      opponentChampions: mMUser.practiceChampionSelected
    })
      .then(res => {
        let MatchedChampions = [];
        if (res.length === 0) {
          mMUser.save();
          return MS.AddedToQueue;
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
        if (res === MS.AddedToQueue) {
          return MS.AddedToQueue;
        } else {
          let MatchedPlayers = [];
          for (let i = 0; i < res.length; i++) {
            let rankDifference;
            if (mMUser.rank > res[i].rank) {
              rankDifference = mMUser.rank - res[i].rank;
            } else {
              rankDifference = res[i].rank - mMUser.rank;
            }

            if (rankDifference <= 15) {
              if (res[i].selectedLane === mMUser.selectedLane) {
                const info = {
                  summonerName: res[i].summonerName,
                  opponentChampions: res[i].opponentChampions,
                  userChampion: res[i].practiceChampionSelected,
                  selectedLane: res[i].selectedLane,
                  rankedStats: `https://app.blitz.gg/lol/profile/${
                    res[i].region
                  }1/${res[i].summonerName}`,
                  rank: res[i].rank,
                  practiceChampionSelected: res[i].practiceChampionSelected
                };
                MatchedPlayers.push(info);
              }
            }
          }
          return MatchedPlayers;
        }
      })
      .catch(err => {
        console.log(`err: `);
        console.log(err);
      });
  } else {
    return MS.Duplicate;
  }
}

// MatchMake verificates user with JWT, gets summoner information by blitz api,
// compares queueobjects for a match, if match, adds to matchMake database.
// If summoner doesn't find match, then add queueobject to queue and wait for
// another summoner to match with the former summoner.
router.post("/matchMake", async (req, res) => {
  let verification;
  try {
    verification = await jwt.verify(req.body.jwt, keys.JWTPrivateKey);
  } catch (err) {
    res.status(401).send("Key has expired!");
  }

  let user;
  try {
    user = await User.findOne({ _id: verification._id });
  } catch (err) {
    res.status(400).send("Did not find user.");
  }

  let summonerJSON;
  try {
    summonerJSON = await rp(
      `https://blitz.iesdev.com/api/lolapi/euw1/accounts/name/${
        user.summonerName
      }?force=true`
    );
  } catch (err) {
    console.log(err);
  }

  let summoner = JSON.parse(summonerJSON);
  let summonerID = summoner.data.id;

  let rankJSON;
  try {
    rankJSON = await rp(
      `https://blitz.iesdev.com/api/lolapi/euw1/league_positions/${summonerID}?force=true`
    );
  } catch (err) {
    console.log(err);
  }

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

  let compatibleSummoners;
  try {
    compatibleSummoners = await searchMatch(matchMakingUser);
  } catch (err) {
    console.log(err);
  }

  let matchMade;

  if (compatibleSummoners === MS.Duplicate) {
    res.status(200).send(MS.Duplicate);
  }

  if (compatibleSummoners === MS.AddedToQueue) {
    res.status(200).send(MS.AddedToQueue);
  }

  if (Array.isArray(compatibleSummoners) && compatibleSummoners.length > 0) {
    for (let i = 0; i < compatibleSummoners.length; i++) {
      if (
        matchMakingUser.summonerName === compatibleSummoners[i].summonerName &&
        compatibleSummoners.length === 1
      ) {
        res.status(200).send(MS.AddedToQueue);
        matchMakingUser.save();
      } else {
        matchMade = new MatchMade({
          summonerOne: {
            summonerName: matchMakingUser.summonerName,
            rank: matchMakingUser.rank,
            practiceChampionSelected: matchMakingUser.practiceChampionSelected,
            selectedLane: matchMakingUser.selectedLane,
            accept: "undefined"
          },
          summonerTwo: {
            summonerName: compatibleSummoners[i].summonerName,
            rank: compatibleSummoners[i].rank,
            practiceChampionSelected:
              compatibleSummoners[i].practiceChampionSelected,
            selectedLane: compatibleSummoners[i].selectedLane,
            accept: "undefined"
          }
        });
        console.log(matchMade);
        MatchMade.find(
          {
            summonerOne: matchMade.summonerOne,
            summonerTwo: matchMade.summonerTwo
          },
          (err, match) => {
            if (match.length === 0 && Array.isArray(match)) {
              if (
                !(
                  matchMade.summonerOne.summonerName ===
                  matchMade.summonerTwo.summonerName
                )
              ) {
                matchMade.save();
              }
            } else {
              console.log(`duplicate of matchmade`);
            }
            if (err) {
              console.log(`E R R O R : `);
              console.log(err);
            }
          }
        );
      }
    }
    res.status(200).send(compatibleSummoners);
  }
});

module.exports = router;
