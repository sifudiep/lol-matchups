import React, { Component } from "react";

import Navbar from "../../components/reuse/navbar/Navbar";
import SignupSection from "../../components/signup_section/SignupSection";
import "./SignupPage.css";

class SignupPage extends Component {
  render() {
    return (
      <div className="signupPage__container">
        <Navbar />
        <SignupSection />
      </div>
    );
  }
}

export default SignupPage;
