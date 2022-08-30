import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  Decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>count ___ {this.state.count}</h1>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
