import React, { Component } from "react";

class Alert extends Component {
  // Render method runs everytime state updates. 
  render() {
    return (
      <div className="navbar__alert">
        <i className="fas fa-bell navbar__alert__glyph" />
      </div>
    );
  }
}

export default Alert;
