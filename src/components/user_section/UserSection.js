import React, { Component } from "react";

class UserSection extends Component {
  render() {
    return (
      <div className="userSection">
        <div className="userSection__summonerName">
          <p className="userSection__summonerName__text">
            {localStorage.getItem("summonerName")}
          </p>
        </div>
        <div className="userSection__menu" />
        <div className="userSection__menuView" />
        <div className="userSection__menuView__title" />
      </div>
    );
  }
}

export default UserSection;
