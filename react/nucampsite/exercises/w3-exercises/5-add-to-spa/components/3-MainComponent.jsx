import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./4-HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { CAMPSITES } from "../shared/campsites";
// step 1 ADD
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";
// step 1 ADD

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // step 3 EDIT
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS,
      // step 3 EDIT
    };
  }

  render() {
    const HomePage = () => {
      // step 4 EDIT
      return (
        <Home
          campsite={
            this.state.campsites.filter((campsite) => campsite.featured)[0]
          }
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      );
      // step 4 EDIT
    };

    return (
      <div>
        <Header />
        <Switch>
          {/* // step 2 ADD */}
          <Route exact path="/contactus" component={Contact} />
          {/* // step 2 ADD */}
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
