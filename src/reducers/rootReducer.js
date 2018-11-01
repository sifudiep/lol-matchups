import actionVariables from "./actionVariables";
import axios from "axios";

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
    return {
      ...state,
      searchTerm: action.payLoad.searchTerm.toLowerCase()
    };
  }

  if (action.type === actionVariables.ONCLICKEDLANE) {
    return {
      ...state,
      searchTerm: action.payLoad.laneName
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

  // login(data) {
  //   return axios.post('/api/login', data).then(res => {
  //     const token = res.data.token;
  //     localStorage.setItem('jwtToken', token);
  //   })
  // }

  if (action.type === actionVariables.ONLOGIN) {
    axios
      .post("http://localhost:2000/api/login", {
        email: action.payLoad.account.email,
        password: action.payLoad.account.password
      })
      .then(res => {
        const token = res.data;
        localStorage.setItem("jwtToken", token);
      })
      .catch(err => {
        console.log(`error : ${err}`);
      });
  }

  return state;
};

export default reducer;
