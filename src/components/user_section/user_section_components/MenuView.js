import React, { Component } from "react";
import { connect } from "react-redux";
import NewMatches from "./NewMatches";
import ChampQueue from "./ChampQueue";
import ReadyMatches from "./ReadyMatches";
import USV from "./UserSectionVariables";

class MenuView extends Component {
  render() {
    switch (this.props.menuView) {
      default:
        break;
      case USV.ChampionQueue:
        return (
          <div className="userSection__menuView">
            <ChampQueue />
          </div>
        );
      case USV.NewMatches:
        return (
          <div className="userSection__menuView">
            <NewMatches />
          </div>
        );
      case USV.ReadyMatches:
        return (
          <div className="userSection__menuView">
            <ReadyMatches />
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    menuView: state.menuView
  };
};

export default connect(mapStateToProps)(MenuView);
