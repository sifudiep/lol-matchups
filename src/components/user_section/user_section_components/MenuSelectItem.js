import React, { Component } from "react";
import { connect } from "react-redux";

class MenuSelectItem extends Component {
  render() {
    if (this.props.itemName === this.props.menuView) {
      return (
        <button
          className="userSection__menuSelect__items__item userSection__menuSelect__items__item--clicked"
          onClick={() => {
            this.props.clicked(this.props.itemName);
            if (this.props.extraDispatch) {
              this.props.extraDispatch();
            }
          }}
        >
          <p className="userSection__menuSelect__items__item__text">
            {this.props.itemName}
          </p>
        </button>
      );
    } else {
      return (
        <button
          className="userSection__menuSelect__items__item"
          onClick={() => {
            this.props.clicked(this.props.itemName);
            if (this.props.extraDispatch) {
              this.props.extraDispatch();
            }
          }}
        >
          <p className="userSection__menuSelect__items__item__text">
            {this.props.itemName}
          </p>
        </button>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    menuView: state.menuView
  };
};

export default connect(mapStateToProps)(MenuSelectItem);
