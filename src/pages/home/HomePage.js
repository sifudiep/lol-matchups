import React, { Component } from "react";

import Navbar from "../../components/reuse/navbar/Navbar";
import ChampSelectSection from "../../components/champ_select/ChampSelectSection";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage__container">
        <Navbar />
        <ChampSelectSection />
      </div>
    );
  }
}

export default HomePage;
