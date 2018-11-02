import React, { Component } from "react";
import Logo from "../components/logo/logo";
import Signup from "../components/signup/signup";
import Login from "../components/login/login";
import LaneIcons from "../components/laneIcons/laneIcons";
import SearchBar from "../components/searchBar/searchBar";
import ChampSelect from "../components/champSelect/champSelect";
import OpponentSideTitle from "../components/opponentSide/opponenSideTitle";
import OpponentSide from "../components/opponentSide/opponentSide";
import UserSideTitle from "../components/userSide/userSideTitle";
import UserSide from "../components/userSide/userSide";
import Footer from "../components/footer/footer";
import FindMatch from "../components/findMatch/findMatch";
import "./HomePage.css";

import { connect } from "react-redux";
import axios from "axios";

class HomePage extends Component {
  state = {
    verified: false,
    user: ""
  };

  componentDidMount() {
    axios
      .post("http://localhost:2000/api/auth", { jwt: this.props.jwt })
      .then(res => {
        console.log(`Setting state in homepage`);
        this.setState({
          verified: true,
          user: res.data._id
        });
      })
      .catch(err => {
        console.log(`err: ${err}`);
      });
  }

  render() {
    console.log(`verified: ${this.props.jwt}`);
    return (
      <div className="homePage_container">
        <div className="navBar">
          <Logo />
          <Signup />
          <Login />
        </div>
        <div className="pickSection">
          <LaneIcons />
          <SearchBar />
          <ChampSelect />
          <OpponentSideTitle />
          <OpponentSide />
          <UserSideTitle />
          <UserSide />
          <FindMatch />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(HomePage);
