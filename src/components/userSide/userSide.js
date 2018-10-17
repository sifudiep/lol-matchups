import React from "react";
import { connect } from "react-redux";
import Champ from "../champ/champ";

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

export default connect(mapStateToProps)(UserSide);
