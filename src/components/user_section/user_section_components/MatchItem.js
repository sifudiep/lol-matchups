import React, { Component } from "react";
import axios from "axios";

class MatchItem extends Component {
  calculateRank(rankInput) {
    let division = 5;
    let tier;
    for (let i = 0; i < 5; i++) {
      if (rankInput < 5) {
        division = rankInput;
        tier = 0;
        break;
      } else if (rankInput % 5 !== 0) {
        rankInput -= 1;
        division -= 1;
      } else {
        tier = rankInput / 5;
        break;
      }
    }

    switch (tier) {
      case 0:
        tier = "Bronze";
        break;
      case 1:
        tier = "Silver";
        break;
      case 2:
        tier = "Gold";
        break;
      case 3:
        tier = "Platinum";
        break;
      case 4:
        tier = "Diamond";
        break;
    }

    return `${tier} ${division}`;
  }

  render() {
    return (
      <div className="userSection__matchItem">
        <div className="userSection__matchItem__summonerOne">
          <img
            className="userSection__matchItem__summonerOne__championIcon"
            src={this.props.S1_imgURL}
          />
          <p className="userSection__matchItem__summonerOne__rank">
            {this.calculateRank(this.props.S1_rank)}
          </p>

          <p className="userSection__matchItem__summonerOne__lane">
            {this.props.S1_lane}
          </p>
        </div>
        <div className="userSection__matchItem__summonerTwo">
          <img
            className="userSection__matchItem__summonerTwo__championIcon"
            src={this.calculateRank(this.props.S2_imgURL)}
          />
          <p className="userSection__matchItem__summonerTwo__rank">
            {this.props.S2_rank}
          </p>

          <p className="userSection__matchItem__summonerTwo__lane">
            {this.props.S2_lane}
          </p>
        </div>
      </div>
    );
  }
}

export default MatchItem;
