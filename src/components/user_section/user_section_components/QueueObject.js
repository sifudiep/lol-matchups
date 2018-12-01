import React, { Component } from "react";

export default class QueueObject extends Component {
  render() {
    const opponentChampions = this.props.opponentChampions.map(
      opponentChampion => {
        return (
          <img
            className="userSection__menuView__champQueue__object__opponents__img"
            src={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${opponentChampion}.png`}
            alt={opponentChampion}
            key={opponentChampion}
          />
        );
      }
    );

    return (
      <div className="userSection__menuView__champQueue__object">
        <img
          className="userSection__menuView__champQueue__object__practiceChampionImg"
          src={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${
            this.props.practiceChampionSelected
          }.png`}
          alt={this.props.practiceChampionSelected}
        />

        <div className="userSection__menuView__champQueue__object__opponents">
          {opponentChampions}
        </div>

        <button
          className="userSection__menuView__champQueue__object__delete"
          onClick={() => {
            this.props.deleteQueueObject(this.props.matchId);
          }}
        >
          <i className="fa fa-times" />
        </button>
      </div>
    );
  }
}
