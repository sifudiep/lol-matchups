import React, { Component } from "react";
import { connect } from "react-redux";
import actionVariables from "../../../reducers/actionVariables";

class SelectLane extends Component {
  state = {
    selectedLane: "TOP"
  };

  render() {
    function changeLane(lane, that) {
      switch (lane) {
        default:
          break;
        case "TOP":
          that.setState({ selectedLane: "MID" });
          that.props.onLaneChange("MID");
          break;
        case "MID":
          that.setState({ selectedLane: "TOP" });
          that.props.onLaneChange("TOP");
          break;
      }
    }

    return (
      <div className="pickSection__selectLane">
        <button
          className="pickSection__selectLane__button"
          value={this.state.selectedLane}
          onClick={e => {
            changeLane(e.target.value, this);
          }}
        >
          {this.state.selectedLane} LANE
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLaneChange: lane =>
      dispatch({
        type: actionVariables.ONCHANGELANE,
        payLoad: { lane }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SelectLane);
