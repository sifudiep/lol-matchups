import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../../../reducers/actionVariables";

class Logout extends Component {
  render() {
    return (
      <div className="navbar__logout">
        <i
          onClick={() => {
            this.props.onLogout();
          }}
          className="fas fa-sign-out-alt navbar__logout__glyph"
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
