import React from "react";

const NewCounter = (OrignalComponent) => {
  class NewComponent extends React.Component {
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
      return (
        <OrignalComponent count={this.state.count} Increment={this.Increment} />
      );
    }
  }
  return NewComponent;
};

export default NewCounter;
