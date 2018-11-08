import actionVariables from "./actionVariables";
import axios from "axios";

const rootURL = "http://localhost:3000";
const URL = {
  home: rootURL + "/",
  login: rootURL + "/login",
  signup: rootURL + "/signup"
};

const initialState = {
  searchTerm: "",
  practiceChampionSelected: [],
  opponentChampions: [],
  jwt: localStorage.getItem("jwt"),
  selectedLane: ""
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

  if (action.type === actionVariables.ONLOGIN) {
    axios
      .post("http://localhost:2000/api/login", {
        email: action.payLoad.account.email,
        password: action.payLoad.account.password
      })
      .then(res => {
        const token = res.data;
        localStorage.setItem("jwt", token);
        window.location.href = URL.home;
      })
      .catch(err => {
        alert("Invalid Login!");
      });
  }

  if (action.type === actionVariables.ONLOGOUT) {
    localStorage.removeItem("jwt");
    window.location.href = URL.home;
  }

  if (action.type === actionVariables.ONSIGNUP) {
    var account = action.payLoad.account;
    if (account.password === account.confirmPassword) {
      axios
        .post("http://localhost:2000/api/signup", {
          summonerName: account.summonerName,
          email: account.email,
          password: account.password,
          region: account.region,
          active: false
        })
        .then(res => {
          window.location.href = URL.home;
          alert("successful register!");
        })
        .catch(err => {
          console.log(`err: `);
          console.log(err);
        });
    } else {
      alert("password did not match!");
    }
  }

  if (action.type === actionVariables.ONFINDMATCHCLICK) {
    console.log(action.payLoad);
    if (!action.payLoad.practiceChampionSelected) {
      alert("no practice champion selected!");
    } else if (!action.payLoad.opponentChampions) {
      alert("no opponent champions selected");
    } else if (!action.payLoad.selectedLane) {
      alert("no lane selected!");
    } else {
    }
  }

  return state;
};

export default reducer;
