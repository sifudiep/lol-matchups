import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import actionVariables from "../../../reducers/actionVariables";

export class SearchBar extends React.Component {
  render() {
    const champSearch = _.debounce((term, search) => {
      search(term);
    }, 0);
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

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: searchTerm =>
      dispatch({
        type: actionVariables.ONSEARCHTERMCHANGE,
        payLoad: { searchTerm }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
