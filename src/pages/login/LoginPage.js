import React, { Component } from "react";

import Navbar from "../../components/reuse/navbar/Navbar";
import LoginSection from "../../components/login_section/LoginSection";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage__container">
        <Navbar />
        <LoginSection />
      </div>
    );
  }
}

export default LoginPage;
