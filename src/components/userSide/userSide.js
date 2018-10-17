import React from "react";
import { connect } from "react-redux";
import Champ from "../champ/champ";
import actionVariables from "../../reducers/actionVariables";

class UserSide extends React.Component {
  render() {
    const JSXChamp = this.props.practiceChampionSelected.map(champ => {
      return (
        <Champ
          imgClassNick="pickSection_userSide_img"
          textClassNick="pickSection_userSide_text"
          name={champ.name}
          key={champ.name}
          iconURL={champ.iconURL}
          clicked={this.props.onUSChampionClick}
        />
      );
    });
    return <div className="pickSection_userSide">{JSXChamp}</div>;
  }
}

const mapStateToProps = state => {
  return {
    practiceChampionSelected: state.practiceChampionSelected
  };
};

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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSide);
