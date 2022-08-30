import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  ChangeMsg() {
    this.setState({
      message: "Bye Visitor",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ChangeMsg()}>Change it!</button>
      </div>
    );
  }
}

export default State;
