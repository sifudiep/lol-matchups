import React from "react";
import { connect } from "react-redux";
import Champ from "./Champ";
import actionVariables from "../../../reducers/actionVariables";

class OpponentSide extends React.Component {
  // Render method runs everytime state updates. 
  render() {
    const JSXList = this.props.opponentChampions.map(champ => {
      return (
        <Champ
          imgClassNick="pickSection__opponentSide__img"
          textClassNick="pickSection__opponentSide__text"
          name={champ.name}
          key={champ.name}
          iconURL={champ.iconURL}
          clicked={this.props.onOSChampionClick}
        />
      );
    });
    return <div className="pickSection__opponentSide">{JSXList}</div>;
  }
}

// Takes state properties from the redux state and uses them in props.
const mapStateToProps = state => {
  return {
    opponentChampions: state.opponentChampions
  };
};

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onOSChampionClick: champ => {
      dispatch({
        type: actionVariables.ONOSCHAMPIONCLICK,
        payLoad: { name: champ.alt, iconURL: champ.src }
      });
    }
  };
};

// Connects mapDispatchToProps and mapStateToProps to class.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpponentSide);
