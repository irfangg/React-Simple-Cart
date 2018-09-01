import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter, index) => (
          <Counter
            key={index}
            counter={counter}
            handleIncrement={() => this.props.handleIncrement(index)}
            handleDel={() => this.props.handleDel(index)}
          />
        ))}
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}
export default Counters;
