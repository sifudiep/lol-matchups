const express = require("express");
const router = express.Router();
const { MatchMade } = require("../models/MatchMade");

// Retrieves all matches that have been matched for a specific user.
router.post("/retrieveMatches", (req, res) => {
  let matches = [];
  MatchMade.find({}, (err, allMatches) => {
    if (err) {
      console.log(`err`);
      console.log(err);
    } else {
      for (let i = 0; i < allMatches.length; i++) {
        const match = allMatches[i];
        if (match.summonerOne.summonerName === req.body.summonerName) {
          if (
            match.summonerOne.accept === "true" ||
            match.summonerOne.accept === "false"
          ) {
            continue;
          }
          matches.push(match);
        } else if (match.summonerTwo.summonerName === req.body.summonerName) {
          if (
            match.summonerTwo.accept === "true" ||
            match.summonerTwo.accept === "false"
          ) {
            continue;
          }
          matches.push(match);
        }
      }
      res.status(200).send(matches);
    }
  });
});

module.exports = router;
