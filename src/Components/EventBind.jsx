import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // (2)
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // (1),(2)
  // clickHandler() {
  //   this.setState({
  //     message: "GoodBye",
  //   });
  //   console.log(this);
  // }

  // (3)
  clickHandler = () => {
    this.setState({
      message: "Good Bye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* (1) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Change</button> */}
        {/* (2) */}
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
          >
          Change
        </button> */}
        {/* (3) */}
        <button onClick={this.clickHandler}>Change</button>
      </div>
    );
  }
}

export default EventBind;
