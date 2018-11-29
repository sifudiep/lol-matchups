import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Logo from "./navbar_components/Logo";
import Signup from "./navbar_components/Signup";
import Login from "./navbar_components/Login";

import AccountInfo from "./navbar_components/AccountInfo";
import Logout from "./navbar_components/Logout";
import Alert from "./navbar_components/Alert";

class Navbar extends Component {
  state = {
    verified: "",
    user: ""
  };

  componentDidMount() {
    axios
      .post("http://localhost:2000/api/auth", { jwt: this.props.jwt })
      .then(res => {
        this.setState({
          verified: "verified",
          user: res.data._id
        });
      })
      .catch(err => {
        this.setState({
          verified: "unverified",
          user: ""
        });
      });
  }

  render() {
    if (this.state.verified === "verified") {
      return (
        <div className="navbar">
          <Logo />
          <Alert />
          <AccountInfo />
          <Logout />
        </div>
      );
    } else if (this.state.verified === "unverified") {
      return (
        <div className="navbar">
          <Logo />
          <Signup />
          <Login />
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Logo />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.jwt
  };
}

export default connect(mapStateToProps)(Navbar);
