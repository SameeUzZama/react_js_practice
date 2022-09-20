import React, { Component } from "react";

export class HoverdCounterTwo extends Component {
  render() {
    const { count, Increment } = this.props;
    return <h1 onMouseOver={Increment}>Hovered {count} times</h1>;
  }
}

export default HoverdCounterTwo;
