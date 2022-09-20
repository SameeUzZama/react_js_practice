import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";
// import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jack",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jack",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Comp Render");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
