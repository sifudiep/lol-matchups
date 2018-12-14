import React from "react";
import actionVariables from "../../../reducers/actionVariables";
import { connect } from "react-redux";

class FindMatch extends React.Component {
  // Render method runs everytime state updates. 
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

// Takes state properties from the redux state and uses them in props.
const mapStateToProps = state => {
  return {
    opponentChampions: state.opponentChampions,
    practiceChampionSelected: state.practiceChampionSelected,
    selectedLane: state.selectedLane
  };
};

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
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

// Connects mapDispatchToProps and mapStateToProps to class.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindMatch);
