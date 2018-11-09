import React from "react";
import actionVariables from "../../../reducers/actionVariables";
import { connect } from "react-redux";

class FindMatch extends React.Component {
  render() {
    return (
      <div className="pickSection__findMatch">
        <button
          className="pickSection__findMatch__button"
          onClick={() => {
            this.props.onFindMatchClick(this.props)
          }}
        >
          Find Match!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    opponentChampions: state.opponentChampions,
    practiceChampionSelected: state.practiceChampionSelected,
    selectedLane: state.selectedLane
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFindMatchClick: state => {
      dispatch({
        type: actionVariables.ONFINDMATCHCLICK,
        payLoad: { state }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindMatch);
