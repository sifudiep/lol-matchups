import React, { Component } from "react";
import Logo from "./components/logo/logo";
import SignUp from "./components/signUp/signUp";
import Login from "./components/login/login";
import LaneIcons from "./components/laneIcons/laneIcons";
import SearchBar from "./components/searchBar/searchBar";
import ChampSelect from "./components/champSelect/champSelect";
import OpponentSideTitle from "./components/opponentSide/opponenSideTitle";
import OpponentSide from "./components/opponentSide/opponentSide";
import UserSideTitle from "./components/userSide/userSideTitle";
import UserSide from "./components/userSide/userSide";
import Footer from "./components/footer/footer";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="navBar">
          <Logo />
          <SignUp />
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
