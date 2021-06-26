import React, { Component } from "react";
import FuncComp from "./components/FuncComp";

class App extends Component {
  state = {
    p1: "Juan",
    arr: ["Action", "Comedy", "Horror", "Romance"],
    actionsMovies: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
  };

  displayGenres = () => {
    const newArr = this.state.arr.map((eachElement) => {
      return <li>{eachElement}</li>;
    });

    return newArr;
  };

  render() {
    return (
      <div>
        <h1>{this.state.p1}</h1>
        <button onClick={() => this.setState({ p1: "Rod" })}>
          Change Name
        </button>
        <ul>{this.displayGenres()}</ul>
        <FuncComp actionsMovies={this.state.actionsMovies} />
      </div>
    );
  }
}

export default App;
