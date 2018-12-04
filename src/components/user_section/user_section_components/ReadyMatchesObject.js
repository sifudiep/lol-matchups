import React, { Component } from "react";

class ReadyMatchesObject extends Component {
  render() {
    if (this.props.S1_summonerName === localStorage.getItem("summonerName")) {
      console.log(`1`);
      if (this.props.S2_accept === "true") {
        console.log(`2`);
        return (
          <div className="userSection__matchItem">
            <button className="userSection__matchItem__accept--noAnimation">
              <i className="fa fa-check" />
            </button>

            <div className="userSection__matchItem__summonerOne">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S1_champion
                }.png`}
                alt={this.props.S1_champion}
                className="userSection__matchItem__summonerOne__championIcon"
              />
              <a
                href={`http://euw.op.gg/summoner/userName=${
                  this.props.S1_summonerName
                }`}
                className="userSection__matchItem__summonerOne__name noLinkStyle"
              >
                {this.props.S1_summonerName}
              </a>
            </div>

            <p className="userSection__matchItem__lane">
              {this.props.S1_lane === this.props.S2_lane
                ? this.props.S1_lane
                : "error"}
            </p>
            <p className="userSection__matchItem__versus">VS.</p>

            <div className="userSection__matchItem__summonerTwo">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S2_champion
                }.png`}
                alt={this.props.S2_champion}
                className="userSection__matchItem__summonerTwo__championIcon"
              />
              <p className="userSection__matchItem__summonerTwo__name">
                {this.props.S2_summonerName}
              </p>
              <a
                href={`http://euw.op.gg/summoner/userName=${
                  this.props.S2_summonerName
                }`}
                className="userSection__matchItem__summonerTwo__name noLinkStyle"
              >
                {this.props.S2_summonerName}
              </a>
            </div>

            <button className="userSection__matchItem__enemyAccept">
              <i className="fa fa-check" />
            </button>
          </div>
        );
      } else if (this.props.S2_accept === "undefined") {
        console.log(`3`);
        return (
          <div className="userSection__matchItem">
            <button className="userSection__matchItem__accept--noAnimation">
              <i className="fa fa-check" />
            </button>

            <div className="userSection__matchItem__summonerOne">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S1_champion
                }.png`}
                alt={this.props.S1_champion}
                className="userSection__matchItem__summonerOne__championIcon"
              />
              <p className="userSection__matchItem__summonerOne__name">
                {this.props.S1_summonerName}
              </p>
            </div>

            <p className="userSection__matchItem__lane">
              {this.props.S1_lane === this.props.S2_lane
                ? this.props.S1_lane
                : "error"}
            </p>
            <p className="userSection__matchItem__versus">VS.</p>

            <div className="userSection__matchItem__summonerTwo">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S2_champion
                }.png`}
                alt={this.props.S2_champion}
                className="userSection__matchItem__summonerTwo__championIcon"
              />
              <p className="userSection__matchItem__summonerTwo__name">
                [pending]
              </p>
            </div>

            <button className="userSection__matchItem__pending">
              <i className="fa fa-question" />
            </button>
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
          <div className="userSection__matchItem">
            <button className="userSection__matchItem__accept--noAnimation">
              <i className="fa fa-check" />
            </button>

            <div className="userSection__matchItem__summonerOne">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S2_champion
                }.png`}
                alt={this.props.S2_champion}
                className="userSection__matchItem__summonerOne__championIcon"
              />
              <a
                href={`http://euw.op.gg/summoner/userName=${
                  this.props.S2_summonerName
                }`}
                className="userSection__matchItem__summonerOne__name noLinkStyle"
              >
                {this.props.S2_summonerName}
              </a>
            </div>

            <p className="userSection__matchItem__lane">
              {this.props.S2_lane === this.props.S2_lane
                ? this.props.S2_lane
                : "error"}
            </p>
            <p className="userSection__matchItem__versus">VS.</p>

            <div className="userSection__matchItem__summonerTwo">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S1_champion
                }.png`}
                alt={this.props.S1_champion}
                className="userSection__matchItem__summonerTwo__championIcon"
              />
              <p className="userSection__matchItem__summonerTwo__name">
                {this.props.S1_summonerName}
              </p>
              <a
                href={`http://euw.op.gg/summoner/userName=${
                  this.props.S1_summonerName
                }`}
                className="userSection__matchItem__summonerTwo__name noLinkStyle"
              >
                {this.props.S1_summonerName}
              </a>
            </div>

            <button className="userSection__matchItem__enemyAccept">
              <i className="fa fa-check" />
            </button>
          </div>
        );
      } else if (this.props.S1_accept === "undefined") {
        console.log(`6`);
        return (
          <div className="userSection__matchItem">
            <button className="userSection__matchItem__accept--noAnimation">
              <i className="fa fa-check" />
            </button>

            <div className="userSection__matchItem__summonerTwo">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S1_champion
                }.png`}
                alt={this.props.S1_champion}
                className="userSection__matchItem__summonerTwo__championIcon"
              />
              <p className="userSection__matchItem__summonerTwo__name">
                [pending]
              </p>
            </div>

            <p className="userSection__matchItem__lane">
              {this.props.S1_lane === this.props.S2_lane
                ? this.props.S1_lane
                : "error"}
            </p>
            <p className="userSection__matchItem__versus">VS.</p>

            <div className="userSection__matchItem__summonerOne">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
                  this.props.S2_champion
                }.png`}
                alt={this.props.S2_champion}
                className="userSection__matchItem__summonerOne__championIcon"
              />
              <p className="userSection__matchItem__summonerOne__name">
                {this.props.S2_summonerName}
              </p>
            </div>

            <button className="userSection__matchItem__pending">
              <i className="fa fa-question" />
            </button>
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
