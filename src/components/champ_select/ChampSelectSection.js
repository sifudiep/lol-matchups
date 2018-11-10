import React, { Component } from "react";
import LaneIcons from "./champ_select_components/LaneIcons";
import SearchBar from "./champ_select_components/SearchBar";
import ChampSelect from "./champ_select_components/ChampSelect";
import OpponentSideTitle from "./champ_select_components/OpponentSideTitle";
import OpponentSide from "./champ_select_components/OpponentSide";
import UserSideTitle from "./champ_select_components/UserSideTitle";
import UserSide from "./champ_select_components/UserSide";
import FindMatch from "./champ_select_components/FindMatch";
import SelectLane from "./champ_select_components/SelectLane";

class ChampSelectSection extends Component {
  render() {
    return (
      <div className="pickSection">
        <LaneIcons />
        <SearchBar />
        <ChampSelect />
        <OpponentSideTitle />
        <OpponentSide />
        <UserSideTitle />
        <UserSide />
        <SelectLane />
        <FindMatch />
      </div>
    );
  }
}

export default ChampSelectSection;
