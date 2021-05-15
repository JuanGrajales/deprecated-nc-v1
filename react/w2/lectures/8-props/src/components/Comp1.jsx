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
          state data User: {this.state.user} color: {this.state.color}
        </p>
        <p>
          props data User: {this.props.user} color: {this.props.color}
        </p>
      </div>
    );
  }
}

export default Comp1;
