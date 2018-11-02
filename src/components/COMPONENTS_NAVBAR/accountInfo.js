import React, { Component } from "react";
import { Link } from "react-router-dom";

class Alert extends Component {
  render() {
    return (
      <div>
        <div className="navBar_accountInfo">
          <Link to="accountPage">
            <a className="navBar_accountInfo_button">accountInfo</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Alert;
