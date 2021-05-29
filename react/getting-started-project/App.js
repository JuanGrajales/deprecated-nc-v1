import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
