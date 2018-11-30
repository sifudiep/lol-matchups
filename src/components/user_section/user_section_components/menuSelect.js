import React, { Component } from "react";
import MenuSelectItem from "./MenuSelectItem";
import { connect } from "react-redux";
import actionVariables from "../../../reducers/actionVariables";

class MenuSelect extends Component {
  render() {
    return (
      <div className="userSection__menuSelect">
        <div className="userSection__menuSelect__items">
          <MenuSelectItem
            itemName="Account Settings"
            clicked={this.props.onCHANGEMENUVIEW}
          />
          <MenuSelectItem
            itemName="Champion Queue"
            clicked={this.props.onCHANGEMENUVIEW}
          />
          <MenuSelectItem
            itemName="New Matches"
            clicked={this.props.onCHANGEMENUVIEW}
            extraDispatch={this.props.onRETRIEVEMATCHES}
          />
          <MenuSelectItem
            itemName="Match History"
            clicked={this.props.onCHANGEMENUVIEW}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCHANGEMENUVIEW: view => {
      dispatch({
        type: actionVariables.ONCHANGEMENUVIEW,
        payLoad: { name: view }
      });
    },
    onRETRIEVEMATCHES: matches => {
      dispatch({
        type: actionVariables.ONRETRIEVEMATCHES
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MenuSelect);
