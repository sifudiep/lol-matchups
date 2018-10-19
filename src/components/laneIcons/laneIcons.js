import React from "react";
import { connect } from "react-redux";
import actionVariables from "../../reducers/actionVariables";
import Lane from "./lane";

const allLanes = [
  {
    laneName: "top",
    imgURL:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/84/Top_Icon.png/revision/latest?cb=20161112025307"
  },
  {
    laneName: "mid",
    imgURL:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/70/Mid_icon.png/revision/latest?cb=20170515021433"
  },
  {
    laneName: "adc",
    imgURL:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/32/Bot_icon.png/revision/latest?cb=20171118085356"
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
            classNick="pickSection_laneIcons_styling_picked"
            clicked={this.props.clickedLane}
          />
        );
      }
      return (
        <Lane
          imgURL={lane.imgURL}
          key={lane.laneName}
          laneName={lane.laneName}
          classNick="pickSection_laneIcons_styling"
          clicked={this.props.clickedLane}
        />
      );
    });

    return <div className="pickSection_laneIcons">{JSXLanesArray}</div>;
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
