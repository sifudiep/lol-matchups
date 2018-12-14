const express = require("express");
const router = express.Router();
const { MatchMakingUser } = require("../models/matchMakingUser");

// Retrieve all queue searches for a user. 
router.post("/retrieveQueue", (req, res) => {
  MatchMakingUser.find({}, (err, users) => {
    let queue = [];
    users.forEach(user => {
      if (user.summonerName === req.body.summonerName) {
        queue.push(user);
      }
    });
    res.status(200).send(queue);
  });
});

module.exports = router;
