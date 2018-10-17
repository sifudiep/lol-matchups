import React from "react";
import { connect } from "react-redux";
import Champ from "../champ/champ";
import actionVariables from "../../reducers/actionVariables";

class OpponentSide extends React.Component {
  render() {
    const JSXList = this.props.opponentChampions.map(champ => {
      return (
        <Champ
          imgClassNick="pickSection_opponentSide_img"
          textClassNick="pickSection_opponentSide_text"
          name={champ.name}
          key={champ.name}
          iconURL={champ.iconURL}
          clicked={this.props.onOSChampionClick}
        />
      );
    });
    return <div className="pickSection_opponentSide">{JSXList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    opponentChampions: state.opponentChampions
  };
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpponentSide);
