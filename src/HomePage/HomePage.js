import React, { Component } from "react";
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

import NavBar from "../components/navBar/navBar";

import { connect } from "react-redux";
import axios from "axios";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage_container">
        <NavBar />
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

export default HomePage;
