import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../reducers/actionVariables";

class SignupSection extends Component {
  state = {
    summonerName: "",
    email: "",
    region: "euw",
    password: "",
    confirmPassword: ""
  };

  onSignup = e => {
    e.preventDefault();
    this.props.onSignup(this.state);
  };

  // Render method runs everytime state updates. 
  render() {
    return (
      <div className="signupSection">
        <form className="signupSection__form">
          <h1 className="signupSection__form__signupText">Sign up!</h1>

          <p className="signupSection__form__summonerName">Summoner name</p>
          <input
            className="signupSection__form__summonerName__input"
            value={this.state.summonerName}
            onChange={e => this.setState({ summonerName: e.target.value })}
          />

          <select
            className="signupSection__form__region"
            onChange={e => this.setState({ region: e.target.value })}
            name="region"
          >
            <option value="euw">EUW</option>
            <option value="eune">EUNE</option>
            <option value="na">NA</option>
          </select>

          <p className="signupSection__form__email">Email</p>
          <input
            className="signupSection__form__email__input"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <p className="signupSection__form__password">Password</p>
          <input
            className="signupSection__form__password__input"
            value={this.state.password}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <p className="signupSection__form__confirmPassword">
            Confirm Password
          </p>
          <input
            className="signupSection__form__confirmPassword__input"
            value={this.state.confirmPassword}
            type="password"
            onChange={e => this.setState({ confirmPassword: e.target.value })}
          />

          <button
            className="signupSection__form__register"
            onClick={e => this.onSignup(e)}
          >
            REGISTER
          </button>
        </form>
      </div>
    );
  }
}

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onSignup: account => {
      dispatch({
        type: actionVariables.ONSIGNUP,
        payLoad: { account }
      });
    }
  };
};

// Connects mapDispatchToProps to class.
export default connect(
  null,
  mapDispatchToProps
)(SignupSection);
