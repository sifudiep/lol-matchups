import React, { Component } from "react";
import { Link } from "react-router-dom";

class Alert extends Component {
  // Render method runs everytime state updates. 
  render() {
    return (
      <div className="navbar__accountInfo">
        <Link to="/user" className="navbar__linkStyle">
          <i className="fas fa-user-alt navbar__accountInfo_glyph" />
        </Link>
      </div>
    );
  }
}

export default Alert;
