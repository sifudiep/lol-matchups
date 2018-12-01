import React from "react";
import { connect } from "react-redux";
import allChamps from "./allChamps";
import Champ from "./Champ";
import actionVariables from "../../../reducers/actionVariables";

class ChampSelect extends React.Component {
  sortChampList(searchTerm) {
    //sorts champion list and returns the sortedChampList array
    var sortedChampList = [];
    if (searchTerm === "") {
      return allChamps;
    } else if (searchTerm === "top") {
      for (let i = 0; i < allChamps.length; i++) {
        for (let k = 0; k < allChamps[i].lane.length; k++) {
          if (allChamps[i].lane[k] === "top") {
            sortedChampList.push(allChamps[i]);
          }
        }
      }
      return sortedChampList;
    } else if (searchTerm === "mid") {
      for (let i = 0; i < allChamps.length; i++) {
        for (let k = 0; k < allChamps[i].lane.length; k++) {
          if (allChamps[i].lane[k] === "mid") {
            sortedChampList.push(allChamps[i]);
          }
        }
      }
      return sortedChampList;
    } else if (searchTerm === "adc") {
      for (let i = 0; i < allChamps.length; i++) {
        for (let k = 0; k < allChamps[i].lane.length; k++) {
          if (allChamps[i].lane[k] === "adc") {
            sortedChampList.push(allChamps[i]);
          }
        }
      }
      return sortedChampList;
    } else {
      for (let i = 0; i < allChamps.length; i++) {
        for (let j = 0; j < searchTerm.length; j++) {
          if (searchTerm[j] === allChamps[i].searchName[j]) {
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
        // clicked champions turn gets --picked added to their classname
        const element = this.props.opponentChampions[i];
        if (
          champ.name === element.name ||
          this.props.opponentChampions.length === 8
        ) {
          return (
            <Champ
              imgClassNick="pickSection__champSelect__img--picked"
              textClassNick="pickSection__champSelect__text--picked"
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
          imgClassNick="pickSection__champSelect__img"
          textClassNick="pickSection__champSelect__text"
          iconURL={champ.iconURL}
          key={champ.name}
          name={champ.name}
          clicked={this.props.onCSChampionClick}
        />
      );
    });

    return <div className="pickSection__champSelect">{JSXSortedChampList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    practiceChampionSelected: state.practiceChampionSelected,
    opponentChampions: state.opponentChampions,
    selectedLane: state.selectedLane
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCSChampionClick: champ => {
      dispatch({
        type: actionVariables.ONCSCHAMPIONCLICK,
        payLoad: { name: champ.alt, iconURL: champ.src }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampSelect);
