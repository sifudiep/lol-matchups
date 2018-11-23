import React, { Component } from "react";

export default class menuSelectItem extends Component {
  render() {
    return (
      <div className="userSection__menuSelect__items__item">
        <p className="userSection__menuSelect__items__item__text">
          {this.props.itemName}
        </p>
      </div>
    );
  }
}
