import React, { Component } from "react";
import Match from "./MatchItem";
import axios from "axios";

class NewMatchesView extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    axios
      .post("http://localhost:2000/api/retrieveMatches", {
        summonerName: localStorage.getItem("summonerName"),
        jwt: localStorage.getItem("jwt")
      })
      .then(res => {
        this.setState({
          matches: res.data
        });
      })
      .catch(err => {
        console.log(`err`);
        console.log(err);
      });
  }

  render() {
    if (this.state.matches.length === 0) {
      return (
        <div className="userSection__menuView__newMatches">
          <p>Loading...</p>
        </div>
      );
    } else {
      const matches = this.state.matches.map(match => {
        if (
          match.summonerOne.summonerName ===
          localStorage.getItem("summonerName")
        ) {
          return (
            <Match
              S1_imgURL={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                match.summonerOne.practiceChampionSelected
              }.png`}
              S1_rank={match.summonerOne.rank}
              S1_lane={match.summonerOne.selectedLane}
              S2_imgURL={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                match.summonerTwo.practiceChampionSelected
              }.png`}
              S2_rank={match.summonerTwo.rank}
              S2_lane={match.summonerTwo.selectedLane}
              key={match._id}
            />
          );
        } else {
          return (
            <Match
              S2_imgURL={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                match.summonerOne.practiceChampionSelected
              }.png`}
              S2_rank={match.summonerOne.rank}
              S2_lane={match.summonerOne.selectedLane}
              S1_imgURL={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                match.summonerTwo.practiceChampionSelected
              }.png`}
              S1_rank={match.summonerTwo.rank}
              S1_lane={match.summonerTwo.selectedLane}
              key={match._id}
            />
          );
        }
      });
      return <div className="userSection__menuView__newMatches">{matches}</div>;
    }
  }
}

export default NewMatchesView;
