import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchMessages(event.target.value);
  }

  render() {
    return (
      <div class="row">
        <div class="input-field">
          <label>Search</label>
          <input type="text" onKeyUp={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default Search;
