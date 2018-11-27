const mongoose = require("mongoose");

const matchMade = new mongoose.Schema({
  summonerOne: {
    summonerName: { type: String, required: true },
    rank: { type: Number, required: true },
    practiceChampionSelected: { type: String, required: true },
    selectedLane: { type: String, required: true },
    Accept: { type: Boolean, required: true, default: false }
  },
  summonerTwo: {
    summonerName: { type: String, required: true },
    rank: { type: Number, required: true },
    practiceChampionSelected: { type: String, required: true },
    selectedLane: { type: String, required: true },
    Accept: { type: Boolean, required: true, default: false }
  }
});

const MatchMade = mongoose.model("MatchMade", matchMade);

exports.MatchMade = MatchMade;
