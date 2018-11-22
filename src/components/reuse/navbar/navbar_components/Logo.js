import React from "react";
import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div className="navbar__logo">
      <Link to="/" className="noLinkStyle">
        <p className="navbar__logo__text">League Matchups</p>
      </Link>
    </div>
  );
};

export default Logo;
