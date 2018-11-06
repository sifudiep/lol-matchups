import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Logo from "./navbar_components/Logo";
import Signup from "./navbar_components/Signup";
import Login from "./navbar_components/Login";

import AccountInfo from "./navbar_components/AccountInfo";
import Logout from "./navbar_components/Logout";
import Alert from "./navbar_components/Alert";

class NavBar extends Component {
  state = {
    verified: false,
    user: ""
  };

  componentDidMount() {
    axios
      .post("http://localhost:2000/api/auth", { jwt: this.props.jwt })
      .then(res => {
        this.setState({
          verified: true,
          user: res.data._id
        });
      })
      .catch(err => {
        this.setState({
          verified: false,
          user: ""
        });
      });
  }

  render() {
    if (this.state.verified) {
      return (
        <div className="navBar">
          <Logo />
          <Alert />
          <AccountInfo />
          <Logout />
        </div>
      );
    } else {
      return (
        <div className="navBar">
          <Logo />
          <Signup />
          <Login />
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

export default connect(mapStateToProps)(NavBar);
