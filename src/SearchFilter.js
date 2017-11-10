import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({ value: event.target.value.substr(0, 20) });
  }

  render() {
    const filteredMessages = this.props.value.filter(search => {
      return (
        this.text.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleFilter.bind(this)}
          placeholder="Search here"
        />
        <div class="panel-body">
          <ul>
            {filteredMessages.map(value => {
              return <Search message={value} key={value.text} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
