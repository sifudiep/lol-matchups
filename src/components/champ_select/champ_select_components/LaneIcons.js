import React from "react";
import { connect } from "react-redux";
import actionVariables from "../../../reducers/actionVariables";
import Lane from "./Lane";

const allLanes = [
  {
    laneName: "top",
    imgURL: "https://nerf.lol/assets/images/role/top_icon.png"
  },
  {
    laneName: "mid",
    imgURL: "https://nerf.lol/assets/images/role/mid_icon.png"
  },
  {
    laneName: "adc",
    imgURL: "https://nerf.lol/assets/images/role/bottom_icon.png"
  }
];

class LaneIcons extends React.Component {
  render() {
    const JSXLanesArray = allLanes.map(lane => {
      if (this.props.searchTerm === lane.laneName) {
        return (
          <Lane
            imgURL={lane.imgURL}
            key={lane.laneName}
            laneName={lane.laneName}
            classNick="pickSection__laneIcons__styling--picked"
            clicked={this.props.clickedLane}
          />
        );
      }
      return (
        <Lane
          imgURL={lane.imgURL}
          key={lane.laneName}
          laneName={lane.laneName}
          classNick="pickSection__laneIcons__styling"
          clicked={this.props.clickedLane}
        />
      );
    });

    return <div className="pickSection__laneIcons">{JSXLanesArray}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickedLane: lane => {
      dispatch({
        type: actionVariables.ONCLICKEDLANE,
        payLoad: {
          laneName: lane
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaneIcons);
