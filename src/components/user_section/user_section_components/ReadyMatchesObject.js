import React, { Component } from "react";

class ReadyMatchesObject extends Component {
  render() {
    if (this.props.S1_summonerName === localStorage.getItem("summonerName")) {
      console.log(`1`);
      if (this.props.S2_accept === "true") {
        console.log(`2`);
        return (
          <div className="userSection__menuView__readyMatches__object">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S1_champion
              }.png`}
              alt={this.props.S1_champion}
            />
            <p>{this.props.S1_summonerName}</p>
            <p>{this.props.S1_rank}</p>
            <p>{this.props.S1_accept}</p>

            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S2_champion
              }.png`}
              alt={this.props.S2_champion}
            />
            <p>{this.props.S2_summonerName}</p>
            <p>{this.props.S2_rank}</p>
            <p>{this.props.S2_accept}</p>
          </div>
        );
      } else if (this.props.S2_accept === "undefined") {
        console.log(`3`);
        return (
          <div className="userSection__menuView__readyMatches__object">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S1_champion
              }.png`}
              alt={this.props.S1_champion}
            />
            <p>{this.props.S1_rank}</p>
            <p>{this.props.S1_accept}</p>

            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S2_champion
              }.png`}
              alt={this.props.S2_champion}
            />
            <p>{this.props.S2_summonerName}</p>
            <p>{this.props.S2_rank}</p>
            <p>{this.props.S2_accept}</p>
          </div>
        );
      }
    } else if (
      this.props.S2_summonerName === localStorage.getItem("summonerName")
    ) {
      console.log(`4`);
      if (this.props.S1_accept === "true") {
        console.log(`5`);
        return (
          <div className="userSection__menuView__readyMatches__object">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S1_champion
              }.png`}
              alt={this.props.S1_champion}
            />
            <p>{this.props.S1_summonerName}</p>
            <p>{this.props.S1_rank}</p>
            <p>{this.props.S1_accept}</p>

            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S2_champion
              }.png`}
              alt={this.props.S2_champion}
            />
            <p>{this.props.S2_summonerName}</p>
            <p>{this.props.S2_rank}</p>
            <p>{this.props.S2_accept}</p>
          </div>
        );
      } else if (this.props.S1_accept === "undefined") {
        console.log(`6`);
        return (
          <div className="userSection__menuView__readyMatches__object">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S1_champion
              }.png`}
              alt={this.props.S1_champion}
            />
            <p>{this.props.S1_rank}</p>
            <p>{this.props.S1_accept}</p>

            <img
              src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                this.props.S2_champion
              }.png`}
              alt={this.props.S2_champion}
            />
            <p>{this.props.S2_summonerName}</p>
            <p>{this.props.S2_rank}</p>
            <p>{this.props.S2_accept}</p>
          </div>
        );
      }
    }

    return (
      <div>
        <p>hej</p>
      </div>
    );
  }
}

export default ReadyMatchesObject;
