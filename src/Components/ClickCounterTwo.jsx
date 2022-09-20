import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, Increment } = this.props;
    return <button onClick={Increment}>Clicked {count} Times</button>;
  }
}

export default ClickCounterTwo;
