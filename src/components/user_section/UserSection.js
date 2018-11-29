import React, { Component } from "react";
import { connect } from "react-redux";
import MenuSelect from "./user_section_components/MenuSelect";
import MenuView from "./user_section_components/MenuView";

class UserSection extends Component {
  render() {
    if (this.props.verified === "verified") {
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
    } else if (this.props.verified === "unverified") {
      return (
        <div className="userSection">
          <p>Please log in to access this page.</p>
        </div>
      );
    } else {
      return (
        <div className="userSection">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    verified: state.verified
  };
};

export default connect(mapStateToProps)(UserSection);
