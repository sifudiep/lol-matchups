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
      if (state.opponentChampions.length === 0) {
        // Adds clicked champion to opponentChampions if opponentChampions array is empty,
        // doesn't need to check for duplicates since array is empty
        return {
          ...state,
          opponentChampions: state.opponentChampions.concat([
            { name: action.payLoad.name, iconURL: action.payLoad.iconURL }
          ])
        };
      }

      for (var i = 0; i < state.opponentChampions.length; i++) {
        // checks for duplicates of champion in opponentChampions array
        if (state.opponentChampions[i].name === action.payLoad.name) {
          // if clicked champion already exists in the array opponentChampions, then dont add,
          break;
        } else {
          // else check if champion doesn't exist
          if (i === state.opponentChampions.length - 1) {
            // if whole array has been checked and no duplicates have been found, then add clicked champion
            return {
              ...state,
              opponentChampions: state.opponentChampions.concat([
                { name: action.payLoad.name, iconURL: action.payLoad.iconURL }
              ])
            };
          }
        }
      }
    }
  }

  if (action.type === actionVariables.ONUSCHAMPIONCLICK) {
    return {
      ...state,
      practiceChampionSelected: [],
      opponentChampions: []
    };
  }

  return state;
};

export default reducer;
