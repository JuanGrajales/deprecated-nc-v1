import React, { Component } from "react";

class App extends Component {
  state = {
    p1: "juan",
  };
  render() {
    return (
      <div>
        <h1>{this.state.p1}</h1>
        <button onClick={() => this.setState({ p1: "Rod" })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
