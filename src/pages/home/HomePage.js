import React, { Component } from "react";

import NavBar from "../../components/reuse/navbar/NavBar";
import ChampSelectSection from "../../components/champ_select/ChampSelectSection";
import Footer from "../../components/reuse/footer/Footer";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage__container">
        <NavBar />
        <ChampSelectSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
