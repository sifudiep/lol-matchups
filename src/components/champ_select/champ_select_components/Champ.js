import React from "react";

class Champ extends React.Component {
  render() {
    return (
      <div className="pickSection__champion">
        <img
          className={this.props.imgClassNick}
          alt={this.props.name}
          onClick={e => {
            if (this.props.clicked) {
              this.props.clicked(e.target);
            }
          }}
          src={this.props.iconURL}
        />
        <p className={this.props.textClassNick}>{this.props.name}</p>
      </div>
    );
  }
}

export default Champ;
