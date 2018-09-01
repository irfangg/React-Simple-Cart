import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>It is {this.state.date.toLocaleString()}.</h2>
      </React.Fragment>
    );
  }
}

export default Time;
