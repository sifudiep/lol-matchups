import React, { Component } from "react";
import Logo from "../components/logo/logo";
import Login from "../components/login/login";
import SignUp from "../components/signUp/signUp";

import LoginForm from "../components/loginForm/loginForm";

import Footer from "../components/footer/footer";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    console.log(`localStorage: ${localStorage.jwtToken}`);
    return (
      <div className="loginPage_container">
        <div className="navBar">
          <Logo />
          <Login />
          <SignUp />
        </div>
        <div className="loginSection">
          <LoginForm />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default LoginPage;
