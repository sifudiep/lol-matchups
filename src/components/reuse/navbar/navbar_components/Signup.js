import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  // Render method runs everytime state updates. 
  render() {
    return (
      <div className="navbar__signup">
        <Link to="signup">
          <button className="navbar__signup__button">Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default SignUp;
