import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="loginSection_loginForm">
        <input type="text" className="loginSection_loginForm_accountInput" />
        <input type="password" className="loginSection_loginForm_passInput" />
        <button className="loginSection_loginForm_loginButton">Login</button>
        <p className="loginSection_loginForm_signUpText">
          No account? Sign up!
        </p>
      </div>
    );
  }
}

export default LoginForm;
