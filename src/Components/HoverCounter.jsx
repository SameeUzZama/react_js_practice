import React, { Component } from "react";
import NewCounter from "./NewCounter";

export class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   Increment = () => {
  //     this.setState((pState) => {
  //       return { count: pState.count + 1 };
  //     });
  //   };
  render() {
    const { count, Increment } = this.props;
    return (
      <h2 onMouseOver={Increment}>
        {/* {this.props.name} */}
        Hovered {count} Times
      </h2>
    );
  }
}

export default NewCounter(HoverCounter);
