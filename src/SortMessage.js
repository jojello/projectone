import React, { Component } from "react";

class SortMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    this.props.onSortMessage(this.state.value);
  }

  render() {
    return (
      <div>
        <button
          id="sort"
          type="sort"
          value="Sort"
          class="btn btn-default"
          onClick={this.handleSort}
        >
          Sort Messages
        </button>
      </div>
    );
  }
}

export default SortMessage;
