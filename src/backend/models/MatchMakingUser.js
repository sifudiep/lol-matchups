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
  rank: {
    type: Number,
    required: true
  },
  practiceChampionSelected: {
    type: String,
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
