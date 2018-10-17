import React from "react";
import { connect } from "react-redux";
import allChamps from "./allChamps";
import Champ from "../champ/champ";

class ChampSelect extends React.Component {
  sortChampList(searchTerm) {
    //sorts champion list and returns the sortedChampList array
    var sortedChampList = [];
    if (searchTerm === "") {
      return allChamps;
    } else {
      for (let i = 0; i < allChamps.length; i++) {
        for (let j = 0; j < searchTerm.length; j++) {
          if (searchTerm[j] === allChamps[i].name[j]) {
            if (j === searchTerm.length - 1) {
              sortedChampList.push(allChamps[i]);
            }
          } else {
            break;
          }
        }
      }
      return sortedChampList;
    }
  }

  render() {
    const sortedChampList = this.sortChampList(this.props.searchTerm);

    const JSXSortedChampList = sortedChampList.map(champ => {
      // returns every single object object in the array as jsx
      for (let i = 0; i < this.props.opponentChampions.length; i++) {
        // clicked champions turn gets _picked added to their classname
        const element = this.props.opponentChampions[i];
        if (champ.name === element.name) {
          return (
            <Champ
              imgClassNick="pickSection_champSelect_img_picked"
              textClassNick="pickSection_champSelect_text_picked"
              key={champ.name}
              name={champ.name}
              iconURL={champ.iconURL}
            />
          );
        }
      }

      return (
        // return regular champion if not clicked
        <Champ
          imgClassNick="pickSection_champSelect_img"
          textClassNick="pickSection_champSelect_text"
          iconURL={champ.iconURL}
          key={champ.name}
          name={champ.name}
        />
      );
    });

    return <div className="pickSection_champSelect">{JSXSortedChampList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    practiceChampionSelected: state.practiceChampionSelected,
    opponentChampions: state.opponentChampions
  };
};

export default connect(mapStateToProps)(ChampSelect);
