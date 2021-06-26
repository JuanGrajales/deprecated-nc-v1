import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Jess from "./components/Jess";
import Juan from "./components/Juan";
import Profile from "./components/Profile";

let users = ["juan", "jess", "kelley", "tom"];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Nav</h2>
          <ul>
            {/* <li>
              <Link to="/juan">Juan Profile</Link>
            </li>
            <li>
              <Link to="/jess">Jess Profile</Link>
            </li> */}
            {users.map((eachPerson) => {
              return (
                <li>
                  <Link to={`/${eachPerson}`}>{eachPerson} Profile</Link>
                </li>
              );
            })}
          </ul>
          <h2>
            Switch will choose the route that has the path matching the url
          </h2>
          <Switch>
            {/* <Route exact path="/juan" render={() => <Juan />} />
            <Route exact path="/jess" render={() => <Jess />} /> */}
            <Route
              exact
              path="/:user"
              render={(props) => <Profile {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// const varName = 'fasjldfk'
export default App;

function func(param1) {
  console.log(param1);
}

func("param value");

// How to create dynamic pages?

// How to create a param?
