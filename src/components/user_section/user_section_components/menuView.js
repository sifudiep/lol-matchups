import React, { Component } from "react";
import { connect } from "react-redux";
import AccountSettingsView from "./AccountSettingsView";
import MatchHistoryView from "./MatchHistoryView";
import NewMatchesView from "./NewMatchesView";

class MenuView extends Component {
  render() {
    switch (this.props.menuView) {
      case "Account Settings":
        console.log(this.props.menuView);
        return (
          <div className="userSection__menuView">
            <AccountSettingsView />
          </div>
        );
      case "New Matches":
        console.log(this.props.menuView);
        return (
          <div className="userSection__menuView">
            <NewMatchesView />
          </div>
        );
      case "Match History":
        console.log(this.props.menuView);
        return (
          <div className="userSection__menuView">
            <MatchHistoryView />
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
