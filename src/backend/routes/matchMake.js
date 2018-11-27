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

async function searchMatch(mMUser) {
  let isDuplicate;
  try {
    isDuplicate = await MatchMakingUser.find({
      summonerName: mMUser.summonerName,
      practiceChampionSelected: mMUser.practiceChampionSelected
    });
  } catch (err) {
    return "Duplicate";
  }

  if (isDuplicate.length === 0) {
    return MatchMakingUser.find({
      opponentChampions: mMUser.practiceChampionSelected
    })
      .then(res => {
        let MatchedChampions = [];
        if (res.length === 0) {
          mMUser.save();
          return MatchedChampions;
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
        } else {
          return "Added champion to queue.";
        }
      })
      .catch(err => {
        console.log(`err: `);
        console.log(err);
      });
  } else {
    return "Duplicate";
  }
}

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

  if (Array.isArray(compatibleSummoners) && compatibleSummoners.length > 0) {
    let matchMade;
    for (let i = 0; i < compatibleSummoners.length; i++) {
      matchMade = new MatchMade({
        summonerOne: {
          summonerName: matchMakingUser.summonerName,
          rank: matchMakingUser.rank,
          practiceChampionSelected: matchMakingUser.practiceChampionSelected,
          selectedLane: matchMakingUser.selectedLane
        },
        summonerTwo: {
          summonerName: compatibleSummoners[i].summonerName,
          rank: compatibleSummoners[i].rank,
          practiceChampionSelected:
            compatibleSummoners[i].practiceChampionSelected,
          selectedLane: compatibleSummoners[i].selectedLane
        }
      });

      MatchMade.find(
        {
          summonerOne: matchMade.summonerOne,
          summonerTwo: matchMade.summonerTwo
        },
        (err, match) => {
          if (match.length === 0 && Array.isArray(match)) {
            matchMade.save();
          } else {
            console.log(`duplicate of matchmade`);
          }
        }
      );

      // const compatibleSummoner = await MatchMakingUser.find({
      //   summonerName: compatibleSummoners[i].summonerName,
      //   practiceChampionselected:
      //     compatibleSummoners[i].practiceChampionSelected
      // });

      // compatibleSummoner.delete();

      // console.log(compatibleSummoners[i]);
      // console.log(`compatibleSummoners.rank: ${compatibleSummoners[i].rank}`);
      // console.log(
      //   `compatibleSummoners.practiceChampionSelected: ${
      //     compatibleSummoners[i].practiceChampionSelected
      //   }`
      // );
    }
    res.status(200).send(compatibleSummoners);
  }
});

module.exports = router;
