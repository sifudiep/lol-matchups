import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="navBar__login">
        <Link to="login">
          <button className="navBar__login__button">Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;
