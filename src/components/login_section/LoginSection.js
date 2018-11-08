import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../reducers/actionVariables";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onLocalLogin = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <div className="loginSection">
        <form className="loginSection__loginForm">
          <h1 className="loginSection__loginForm__loginText">Login</h1>

          <input
            className="loginSection__loginForm__accountInput"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="loginSection__loginForm__passInput"
            placeholder="Password"
            value={this.state.password}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button
            className="loginSection__loginForm__loginButton"
            onClick={e => this.onLocalLogin(e)}
          >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: account =>
      dispatch({
        type: actionVariables.ONLOGIN,
        payLoad: { account }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
