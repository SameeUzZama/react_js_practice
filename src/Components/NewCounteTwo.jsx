import React, { Component } from "react";

export class NewCounteTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState((pState) => {
      return { count: pState.count + 1 };
    });
  };
  render() {
    return <div>{this.props.render(this.state.count, this.Increment)}</div>;
  }
}

export default NewCounteTwo;
