import React, { Component } from "react";
import Time from "./Time";
class Navbar extends Component {
  render() {
    return (
      <div style={{ display: "inline-flex" }}>
        <h2 style={{ marginRight: 100 }}>Cart : {this.props.totalCartValue}</h2>
        <Time />
      </div>
    );
  }
}

export default Navbar;
