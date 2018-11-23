import React, { Component } from "react";
import MenuSelectItem from "./menuSelectItem";

class menuSelect extends Component {
  render() {
    return (
      <div className="userSection__menuSelect">
        <div className="userSection__menuSelect__items">
          <MenuSelectItem itemName="Account Settings" />
          <MenuSelectItem itemName="New Matches" />
          <MenuSelectItem itemName="Match History" />
        </div>
      </div>
    );
  }
}

export default menuSelect;
