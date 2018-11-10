import React, { Component } from "react";
import { Link } from "react-router-dom";

class Alert extends Component {
  render() {
    return (
      <div className="navBar__accountInfo">
        <Link to="accountPage" className="navBar__linkStyle">
          <i className="fas fa-user-alt navBar__accountInfo_glyph" />
        </Link>
      </div>
    );
  }
}

export default Alert;
