const mongoose = require("mongoose");

const matchMakingUser = new mongoose.Schema({
  summonerName: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  rankDifference: {
    type: Number,
    required: true
  }
});

const MatchMakingUser = mongoose.model("MatchMakingUser", matchMakingUser);

exports.MatchMakingUser = MatchMakingUser;
