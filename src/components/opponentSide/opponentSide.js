import React from "react";
import { connect } from "react-redux";
import Champ from "../champ/champ";

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

export default connect(mapStateToProps)(OpponentSide);
