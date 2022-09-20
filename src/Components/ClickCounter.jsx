import React, { Component } from "react";
import NewCounter from "./NewCounter";

export class ClickCounter extends Component {
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
    // const { count } = this.state;
    const { count, Increment } = this.props;
    return (
      <div>
        <button onClick={Increment}>
          {/* {this.props.name} */}
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default NewCounter(ClickCounter);
