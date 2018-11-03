import React, { Component } from "react";
import NavBar from "../components/navBar/navBar";
import { connect } from "react-redux";

import LoginForm from "../components/loginForm/loginForm";

import Footer from "../components/footer/footer";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage_container">
        <NavBar />
        <div className="loginSection">
          <LoginForm />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default LoginPage;
