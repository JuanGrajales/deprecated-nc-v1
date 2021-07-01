import React, { Component } from "react";
import ModalForm from "./components/ModalForm";
import SimpleForm from "./components/SimpleForm";
import ValidationForm from "./components/ValidationForm";

class App extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        {/* Read documentation for react-redux-form */}
        <h1>React Redux Form</h1>

        <h3>Simple React Redux Form</h3>
        <SimpleForm />
        <br />
        <br />

        <h3>Redux Form with Validation</h3>
        <ValidationForm />
        <br />
        <br />

        <h3>Redux Form with Modal</h3>
        <ModalForm />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
