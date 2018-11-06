import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../reducers/actionVariables";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <form className="loginSection_loginForm">
        <input
          className="loginSection_loginForm_accountInput"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          className="loginSection_loginForm_passInput"
          placeholder="Password"
          value={this.state.password}
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button
          className="loginSection_loginForm_loginButton"
          onClick={e => this.onSubmit(e)}
        >
          Submit!
        </button>
      </form>
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
