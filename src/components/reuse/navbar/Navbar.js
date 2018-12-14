import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Logo from "./navbar_components/Logo";
import Signup from "./navbar_components/Signup";
import Login from "./navbar_components/Login";

import AccountInfo from "./navbar_components/AccountInfo";
import Logout from "./navbar_components/Logout";
import actionVariables from "../../../reducers/actionVariables";

class Navbar extends Component {
  state = {
    verified: ""
  };

  // Runs the code on startup.
  componentDidMount() {
    axios
      .post("http://localhost:2000/api/auth", { jwt: this.props.jwt })
      .then(res => {
        this.props.onVERIFY("verified");
        this.setState({
          verified: "verified"
        });
      })
      .catch(err => {
        this.props.onVERIFY("unverified");
        this.setState({
          verified: "unverified"
        });
      });
  }

  // Render method runs everytime state updates. 
  render() {
    if (this.state.verified === "verified") {
      return (
        <div className="navbar">
          <Logo />
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

// Takes state properties from the redux state and uses them in props.
function mapStateToProps(state) {
  return {
    jwt: state.jwt
  };
}

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onVERIFY: verified =>
      dispatch({
        type: actionVariables.ONVERIFY,
        payLoad: { verified: verified }
      })
  };
};

// Connects mapDispatchToProps and mapStateToProps to class.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
