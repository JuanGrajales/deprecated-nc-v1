import React, { Component } from "react";
// step 1 REMOVE
// import { Navbar, NavbarBrand } from "reactstrap";
// import Directory from "./components/DirectoryComponent";
// step 1 REMOVE
import "./App.css";
// step 2 REMOVE
// import { CAMPSITES } from "./shared/campsites";
// step 2 REMOVE
// step 3 ADD
import Main from "./components/MainComponent";
// step 3 ADD

class App extends Component {
  // step 4 REMOVE
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //   };
  // }
  // step 4 REMOVE

  render() {
    return (
      <div className="App">
        {/* // step 5 REMOVE */}
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} /> */}
        {/* // step 5 REMOVE */}
        {/* // step 6 ADD */}
        <Main />
        {/* // step 6 ADD */}
      </div>
    );
  }
}

export default App;
