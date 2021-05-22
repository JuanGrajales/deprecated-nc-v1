import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
// step 1 ADD
import { BrowserRouter } from "react-router-dom";
// step 1 ADD

class App extends Component {
  render() {
    return (
      // step 2 ADD
      <BrowserRouter>
        {/* // step 2 ADD */}
        <div className="App">
          <Main />
        </div>
        {/* // step 2 ADD */}
      </BrowserRouter>
      // step 2 ADD
    );
  }
}

export default App;
