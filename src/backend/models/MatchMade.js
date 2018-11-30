const mongoose = require("mongoose");

const matchMade = new mongoose.Schema({
  summonerOne: {
    summonerName: { type: String, required: true },
    rank: { type: Number, required: true },
    practiceChampionSelected: { type: String, required: true },
    selectedLane: { type: String, required: true },
    accept: { type: String, required: true, default: "" }
  },
  summonerTwo: {
    summonerName: { type: String, required: true },
    rank: { type: Number, required: true },
    practiceChampionSelected: { type: String, required: true },
    selectedLane: { type: String, required: true },
    accept: { type: String, required: true, default: "" }
  }
});

const MatchMade = mongoose.model("MatchMade", matchMade);

exports.MatchMade = MatchMade;
