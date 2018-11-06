import React, { Component } from "react";

import NavBar from "../../components/reuse/navbar/NavBar";
import SignupSection from "../../components/signup_section/SignupSection";
import Footer from "../../components/reuse/footer/Footer";
import "./SignupPage.css";

class SignupPage extends Component {
  render() {
    return (
      <div className="signupPage__container">
        <NavBar />
        <SignupSection />
        <Footer />
      </div>
    );
  }
}

export default SignupPage;
