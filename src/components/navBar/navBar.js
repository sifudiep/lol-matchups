import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Logo from "../logo/logo";
import Signup from "../signup/signup";
import Login from "../login/login";
import Alert from "../COMPONENTS_NAVBAR/alert";
import AccountInfo from "../COMPONENTS_NAVBAR/accountInfo";
import Logout from "../COMPONENTS_NAVBAR/logout";

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
        console.log(`err: ${err}`);
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
