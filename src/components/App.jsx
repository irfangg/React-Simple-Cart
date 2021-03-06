import React, { Component } from "react";
import Navbar from "./Navbar";
import Counters from "./Counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, item: "Apple" },
      { id: 2, value: 0, item: "Banana" },
      { id: 3, value: 2, item: "Carrot" },
      { id: 4, value: 0, item: "Grapes" },
      { id: 5, value: 3, item: "Mango" },
      { id: 6, value: 3, item: "Chikoo" }
    ]
  };
  handleIncrement = index => {
    let counters = [...this.state.counters];
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };
  handleDel = index => {
    let counters = [...this.state.counters];
    counters = counters.filter((count, i) => {
      if (i != index) return count;
    });
    this.setState({ counters });
  };
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCartValue={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="App">
          <h3>Add items to cart</h3>
          <Counters
            counters={this.state.counters}
            handleIncrement={this.handleIncrement}
            handleDel={this.handleDel}
            handleReset={this.handleReset}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
