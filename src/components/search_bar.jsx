import React, { Component } from 'react';

class SearchBar extends Component {

  //code to react to inputs from user in the search bar
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render () {
    console.log('Search Bar Render');
    return (
      <input type="text"
      className="form-control form-search"
      onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
