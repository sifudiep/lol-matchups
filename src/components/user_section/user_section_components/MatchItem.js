import React, { Component } from "react";

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
      default:
        break;
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
        <button className="userSection__matchItem__accept">
          <i class="fa fa-check" />
        </button>
        <button className="userSection__matchItem__decline">
          <i class="fa fa-times" />
        </button>
        <p className="userSection__matchItem__lane">
          {this.props.S1_lane === this.props.S2_lane
            ? this.props.S1_lane
            : "error"}
        </p>
        <p className="userSection__matchItem__versus">VS.</p>
        <div className="userSection__matchItem__summonerOne">
          <img
            className="userSection__matchItem__summonerOne__championIcon"
            src={this.props.S1_imgURL}
            alt={this.props.S1_practiceChampionSelected}
          />
          <p className="userSection__matchItem__summonerOne__rank">
            {this.calculateRank(this.props.S1_rank)}
          </p>
        </div>
        <div className="userSection__matchItem__summonerTwo">
          <img
            className="userSection__matchItem__summonerTwo__championIcon"
            src={this.props.S2_imgURL}
            alt={this.props.S2_practiceChampionSelected}
          />
          <p className="userSection__matchItem__summonerTwo__rank">
            {this.calculateRank(this.props.S2_rank)}
          </p>
        </div>
      </div>
    );
  }
}

export default MatchItem;
