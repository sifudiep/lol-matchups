import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  // Render method runs everytime state updates. 
  render() {
    return (
      <div className="navbar__login">
        <Link to="login">
          <button className="navbar__login__button">Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;
