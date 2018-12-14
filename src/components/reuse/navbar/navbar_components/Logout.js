import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../../../reducers/actionVariables";

class Logout extends Component {
  // Render method runs everytime state updates. 
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

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch({
        type: actionVariables.ONLOGOUT
      });
    }
  };
};

// Connects mapDispatchToProps to class.
export default connect(
  null,
  mapDispatchToProps
)(Logout);
