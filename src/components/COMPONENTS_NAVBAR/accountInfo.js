import React, { Component } from "react";
import { Link } from "react-router-dom";

class Alert extends Component {
  render() {
    return (
      <div className="navBar_accountInfo">
        <Link to="accountPage">
          <i className="fas fa-user-alt navBar_accountInfo_glyph" />
        </Link>
      </div>
    );
  }
}

export default Alert;
