import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return <h1>Cart : {this.props.totalCartValue}</h1>;
  }
}

export default Navbar;
