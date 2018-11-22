import React, { Component } from "react";
import axios from "axios";

import Navbar from "../../components/reuse/navbar/Navbar";
import UserSection from "../../components/user_section/UserSection";

import "./UserPage.css";

class UserPage extends Component {
  render() {
    return (
      <div className="userPage__container">
        <Navbar />
        <UserSection />
      </div>
    );
  }
}

export default UserPage;
