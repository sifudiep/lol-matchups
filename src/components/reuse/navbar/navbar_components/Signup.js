import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="navBar__signup">
        <Link to="signup">
          <button className="navBar__signup__button">Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default SignUp;
