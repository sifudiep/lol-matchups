import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="navBar_login">
        <Link to="login">
          <button className="navBar_login_button">Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;
