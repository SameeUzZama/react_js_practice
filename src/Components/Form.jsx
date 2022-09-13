import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComment = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUserName}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleComment}></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopic}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
