import React, { Component } from "react";

class PostMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //This function handles the event of submitting text in text area.
  //Clears entered text once submitted.
  handleSubmit(event) {
    event.preventDefault();
    this.props.onPostMessage(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div class="panel-body">
        <label>Message: </label>
        <div class="form-group">
          <textarea
            id="message"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write Message here"
          />
        </div>
        <button
          id="submit"
          type="submit"
          value="Submit"
          class="btn btn-default"
          onClick={this.handleSubmit}
        >
          Post to board
        </button>
      </div>
    );
  }
}

export default PostMessage;
