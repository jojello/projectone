import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Messages from "./Messages";
import PostMessage from "./PostMessage";
import uuid from "uuid";
import SortMessage from "./SortMessage";
import Search from "./SearchFilter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: uuid.v4(), text: "Hello", likes: 7 },
        { id: uuid.v4(), text: "Goodbye", likes: 2 },
        { id: uuid.v4(), text: "Tomorrow", likes: 3 },
        { id: uuid.v4(), text: "Yesterday", likes: 9 }
      ]
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handlePostMessage = this.handlePostMessage.bind(this);
    this.handleOrderMessage = this.handleOrderMessage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  //Post new message on board by adding to the array of messages. Automatically added to the end.
  handlePostMessage(message) {
    const newMessage = {
      id: uuid.v4(),
      text: message,
      likes: 0
    };
    const newMessages = this.state.messages;
    newMessages.push(newMessage);
    this.setState({
      messages: newMessages
    });
  }

  //Incomplete
  handleSearch(event) {
    console.log(event.target.value);
  }

  //Incomplete - Not working yet
  handleOrderMessage(message) {
    const newMesssageOrder = this.state.sortBy(message, "likes", function(n) {
      return Math.sin(n);
    });
  }

  handleLike(id) {
    const message = this.state.messages.find(message => message.id === id);

    message.likes = message.likes + 1;
    this.setState({
      messages: this.state.messages
    });
  }

  handleDownvote(id) {
    const message = this.state.messages.find(message => message.id === id);

    message.likes = message.likes - 1;
    this.setState({
      messages: this.state.messages
    });
  }

  handleDelete(id) {
    const newMessages = this.state.messages.filter(
      message => message.id !== id
    );
    // no curly brackets required above because implicit return
    this.setState({
      messages: newMessages
    });
  }

  render() {
    return (
      <div>
        <Header title={"Jenna's"} />
        <div class="container" />
        <div class="panel-group">
          <div class="panel panel-primary">
            <div class="panel-heading">Post a message</div>
            <div class="panel-body">
              <PostMessage onPostMessage={this.handlePostMessage} />
            </div>
          </div>
          <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">Message Board</div>
              <SortMessage onSortMessage={this.handleOrderMessage} />
              <ul class="message-board">
                <div class="row">
                  <div class="input-field">
                    <label>Search</label>
                    <input type="text" onKeyUp={this.handleSearch} />
                  </div>
                </div>
                {this.state.messages.map(message => {
                  return (
                    <Messages
                      text={message.text}
                      likes={message.likes}
                      id={message.id}
                      onLike={this.handleLike}
                      onDownvote={this.handleDownvote}
                      onDelete={this.handleDelete}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
