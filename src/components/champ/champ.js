import React from "react";
import { connect } from "react-redux";

class Champ extends React.Component {
  render() {
    return (
      <div className="pickSection_champion">
        <img
          className={this.props.imgClassNick}
          alt={this.props.name}
          onClick={e => {
            this.props.onChampionClick(e.target);
          }}
          src={this.props.iconURL}
        />
        <p className={this.props.textClassNick}>{this.props.name}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChampionClick: champ => {
      dispatch({
        type: "ONCHAMPIONCLICK",
        payLoad: { name: champ.alt, iconURL: champ.src }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Champ);
