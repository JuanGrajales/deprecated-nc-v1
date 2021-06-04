import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// step 1 ADD
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
// step 1 ADD

class App extends Component {
  render() {
    return (
      // step 2 ADD
      <Provider store={store}>
        {/* // step 2 ADD */}
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
        {/* // step 3 ADD */}
      </Provider>
      // step 3 ADD
    );
  }
}

export default App;
