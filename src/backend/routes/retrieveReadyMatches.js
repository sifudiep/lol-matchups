const express = require("express");
const router = express.Router();
const { MatchMade } = require("../models/MatchMade");

router.post("/retrieveReadyMatches", (req, res) => {
  let finalMatches = [];
  MatchMade.find({}, (err, matches) => {
    if (err) console.log(`err ${err}`);
    for (let i = 0; i < matches.length; i++) {
      let summonerOne = matches[i].summonerOne;
      let summonerTwo = matches[i].summonerTwo;

      if (summonerOne.summonerName === req.body.summonerName) {
        console.log(`1`);
        if (summonerOne.accept === "true") {
          console.log(`2`);
          if (
            summonerTwo.accept === "true" ||
            summonerTwo.accept === "undefined"
          ) {
            console.log(`3`);
            finalMatches.push(matches[i]);
          }
        }
      } else if (summonerTwo.summonerName === req.body.summonerName) {
        console.log(`4`);
        if (summonerTwo.accept === "true") {
          console.log(`5`);
          if (
            summonerOne.accept === "true" ||
            summonerOne.accept === "undefined"
          ) {
            console.log(`6`);
            finalMatches.push(matches[i]);
          }
        }
      }
    }
    res.status(200).send(finalMatches);
  });
});

module.exports = router;
