const express = require("express");
const router = express.Router();
const { MatchMakingUser } = require("../models/matchMakingUser");

// Deletes queue object from database by id from "MatchMakingUser".
router.post("/deleteChampQueueObject", (req, res) => {
  MatchMakingUser.findById(req.body.id, (err, mmUser) => {
    if (err) res.status(400).send("Couldnt remove");

    mmUser.remove();
    res.status(200).send("Removed!");
  });
});

module.exports = router;
