import React from "react";
import { connect } from "react-redux";
import actionVariables from "../../../reducers/actionVariables";

class SearchBar extends React.Component {
  // Render method runs everytime state updates. 
  render() {
    const champSearch = (term, search) => {
      search(term);
    };
    return (
      <div className="pickSection__searchBar">
        <input
          className="pickSection__searchBar__styling"
          value={this.props.searchTerm}
          placeholder="search (don't use spaces)"
          onChange={e =>
            champSearch(e.target.value, this.props.onSearchTermChange)
          }
        />
      </div>
    );
  }
}

// Takes state properties from the redux state and uses them in props.
const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

// Dispatch is accessible with props, (Dispatch is used for changing the redux state and sending api requests)
const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: searchTerm =>
      dispatch({
        type: actionVariables.ONSEARCHTERMCHANGE,
        payLoad: { searchTerm }
      })
  };
};

// Connects mapDispatchToProps and mapStateToProps to class.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
