import React, { Component } from "react";

class Counter extends Component {
  margin = {
    marginRight: 10,
    marginBottom: 10
  };

  render() {
    return (
      <div>
        <span style={{ marginRight: 10 }}>{this.props.counter.item} :</span>
        <span style={this.margin}>{this.props.counter.value}</span>
        <button style={this.margin} onClick={this.props.handleIncrement}>
          +
        </button>
        <button onClick={this.props.handleDel}>Delete</button>
      </div>
    );
  }
}

export default Counter;
