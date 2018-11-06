import React, { Component } from "react";

import NavBar from "../../components/reuse/navbar/NavBar";
import LoginForm from "../../components/login_form/LoginForm";
import Footer from "../../components/reuse/footer/Footer";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage__container">
        <NavBar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
