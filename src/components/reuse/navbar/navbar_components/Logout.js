import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../../../reducers/actionVariables";
import { Link } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <div className="navBar__logout">
        <i
          onClick={() => {
            this.props.onLogout();
          }}
          className="fas fa-sign-out-alt navBar__logout__glyph"
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch({
        type: actionVariables.ONLOGOUT
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
