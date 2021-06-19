import React, { Component } from "react";
import Comp1 from "./components/Comp1";

class App extends Component {
  // constructor(props) {
  // super(props);
  state = {
    user: "Juan",
    color: "red",
  };
  // }

  render() {
    return (
      <div>
        <h1>Props... oooof...</h1>
        <h3>App Component</h3>
        <p>
          State data User: {this.state.user} color: {this.state.color}
        </p>
        <button onClick={() => this.setState({ color: "blue" })}>
          Change color
        </button>
        <Comp1 />
      </div>
    );
  }
}

export default App;
