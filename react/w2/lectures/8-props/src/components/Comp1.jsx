import React, { Component } from "react";

class Comp1 extends Component {
  //   constructor(props) {
  // super(props);
  state = {
    user: "Juan",
    color: "red",
  };
  //   }

  render() {
    return (
      <div>
        <h3>Comp1</h3>
        <p>
          User: {this.state.user} color: {this.state.color}
        </p>
      </div>
    );
  }
}

export default Comp1;
