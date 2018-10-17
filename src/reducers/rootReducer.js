import actionVariables from "./actionVariables";

const initialState = {
  searchTerm: "",
  practiceChampionSelected: [],
  opponentChampions: []
};

function RemoveAtIndex(oldArray, index) {
  var newArray = [];
  for (var i = 0; i < oldArray.length; i++) {
    if (i !== index) {
      newArray.push(oldArray[i]);
    }
  }

  return newArray;
}

const reducer = (state = initialState, action) => {
  if (action.type === actionVariables.ONSEARCHTERMCHANGE) {
    console.log(action.payLoad.searchTerm);
    return {
      ...state,
      searchTerm: action.payLoad.searchTerm.toLowerCase()
    };
  }

  if (action.type === actionVariables.ONCSCHAMPIONCLICK) {
    if (state.practiceChampionSelected.length === 0) {
      // Adds champion clicked to userSide if the "practiceChampionSelected" array is empty
      return {
        ...state,
        practiceChampionSelected: state.practiceChampionSelected.concat([
          { name: action.payLoad.name, iconURL: action.payLoad.iconURL }
        ])
      };
    } else {
      return {
        ...state,
        opponentChampions: state.opponentChampions.concat([
          { name: action.payLoad.name, iconURL: action.payLoad.iconURL }
        ])
      };
    }
  }

  if (action.type === actionVariables.ONUSCHAMPIONCLICK) {
    return {
      ...state,
      practiceChampionSelected: [],
      opponentChampions: []
    };
  }

  if (action.type === actionVariables.ONOSCHAMPIONCLICK) {
    var newArray = [];
    for (let i = 0; i < state.opponentChampions.length; i++) {
      const element = state.opponentChampions[i];
      if (action.payLoad.name === element.name) {
        newArray = RemoveAtIndex(state.opponentChampions, i);
      }
    }

    return {
      ...state,
      opponentChampions: newArray
    };
  }

  return state;
};

export default reducer;
