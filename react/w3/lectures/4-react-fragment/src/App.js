import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>React Fragment, yes to keys</React.Fragment>
        <>Same as Fragment?</>
        <div>Boycott React Fragment</div>
        <div>And here too!</div>
      </div>
    );
  }
}

export default App;
