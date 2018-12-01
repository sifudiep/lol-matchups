import React, { Component } from "react";
import { connect } from "react-redux";
import AccountSettings from "./AccountSettings";
import MatchHistory from "./MatchHistory";
import NewMatches from "./NewMatches";
import ChampQueue from "./ChampQueue";
import USV from "./UserSectionVariables";

class MenuView extends Component {
  render() {
    switch (this.props.menuView) {
      default:
        break;
      case USV.AccountSettings:
        return (
          <div className="userSection__menuView">
            <AccountSettings />
          </div>
        );
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
      case USV.MatchHistory:
        return (
          <div className="userSection__menuView">
            <MatchHistory />
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
