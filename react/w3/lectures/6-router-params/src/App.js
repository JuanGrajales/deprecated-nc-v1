import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Juan from "./components/Juan";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Nav</h2>
          <ul>
            <li>
              <Link to="/juan">Juan Profile</Link>
            </li>
            <li>Jess Profile</li>
          </ul>
          <h2>
            Switch will choose the route that has the path matching the url
          </h2>
          <Switch>
            <Route exact path="/juan" render={() => <Juan />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// How to create dynamic pages?

// How to create a param?
