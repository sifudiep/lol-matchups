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
  },
  division: {
    type: Number,
    required: true
  },
  tier: {
    type: Number,
    required: true
  },
  practiceChampionSelected: {
    type: Array,
    required: true
  },
  opponentChampions: {
    type: Array,
    required: true
  },
  selectedLane: {
    type: String,
    required: true
  }

});

const MatchMakingUser = mongoose.model("MatchMakingUser", matchMakingUser);

exports.MatchMakingUser = MatchMakingUser;
