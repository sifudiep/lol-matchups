import React, { Component } from "react";
import axios from "axios";
import ReadyMatchesObject from "./ReadyMatchesObject";

class ReadyMatches extends Component {
  state = {
    matches: []
  };
  componentDidMount() {
    axios
      .post("http://localhost:2000/api/retrieveReadyMatches", {
        summonerName: localStorage.getItem("summonerName")
      })
      .then(res => {
        console.log(`res :`);
        console.log(res);
        this.setState({ matches: res.data });
      })
      .catch(err => {
        console.log(`ERR : ${err}`);
      });
  }

  render() {
    const readyMatches = this.state.matches.map(match => {
      return (
        <div>
          <ReadyMatchesObject
            S1_champion={match.summonerOne.practiceChampionSelected}
            S1_summonerName={match.summonerOne.summonerName}
            S1_accept={match.summonerOne.accept}
            S1_rank={match.summonerOne.rank}
            S2_champion={match.summonerTwo.practiceChampionSelected}
            S2_summonerName={match.summonerTwo.summonerName}
            S2_accept={match.summonerTwo.accept}
            S2_rank={match.summonerTwo.rank}
            key={match._id}
          />
        </div>
      );
    });
    return (
      <div className="userSection__menuView__readyMatches">{readyMatches}</div>
    );
  }
}

export default ReadyMatches;
