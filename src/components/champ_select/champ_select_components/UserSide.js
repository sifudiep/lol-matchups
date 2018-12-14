import React from "react";
import { connect } from "react-redux";
import Champ from "./Champ";
import actionVariables from "../../../reducers/actionVariables";

class UserSide extends React.Component {
  // Render method runs everytime state updates. 
  render() {
    const JSXChamp = this.props.practiceChampionSelected.map(champ => {
      return (
        <Champ
          imgClassNick="pickSection__userSide__img"
          textClassNick="pickSection__userSide__text"
          name={champ.name}
          key={champ.name}
          iconURL={champ.iconURL}
          clicked={this.props.onUSChampionClick}
        />
      );
    });
    return <div className="pickSection__userSide">{JSXChamp}</div>;
  }
}

// Takes state properties from the redux state and uses them in props.
const mapStateToProps = state => {
  return {
    practiceChampionSelected: state.practiceChampionSelected
  };
};

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onUSChampionClick: champ => {
      dispatch({
        type: actionVariables.ONUSCHAMPIONCLICK,
        payLoad: { name: champ.alt, iconURL: champ.src }
      });
    }
  };
};

// Connects mapDispatchToProps and mapStateToProps to class.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSide);
