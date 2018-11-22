import React, { Component } from "react";
import MenuSelect from "./user_section_components/menuSelect";
import MenuView from "./user_section_components/menuView";

class UserSection extends Component {
  render() {
    return (
      <div className="userSection">
        <div className="userSection__summonerName">
          <p className="userSection__summonerName__text">
            {localStorage.getItem("summonerName")}
          </p>
        </div>
        <MenuSelect />
        <MenuView />
      </div>
    );
  }
}

export default UserSection;
