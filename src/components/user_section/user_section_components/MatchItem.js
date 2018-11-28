import React, { Component } from "react";
import axios from "axios";

class MatchItem extends Component {
  render() {
    return (
      <div className="userSection__matchItem">
        <div className="userSection__matchItem__summonerOne">
          <img
            className="userSection__matchItem__summonerOne__championIcon"
            src={this.props.S1_imgURL}
          />
          <p className="userSection__matchItem__summonerOne__rank">
            {this.props.S1_rank}
          </p>

          <p className="userSection__matchItem__summonerOne__lane">
            {this.props.S1_lane}
          </p>
        </div>
        <div className="userSection__matchItem__summonerTwo">
          <img
            className="userSection__matchItem__summonerTwo__championIcon"
            src={this.props.S2_imgURL}
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
