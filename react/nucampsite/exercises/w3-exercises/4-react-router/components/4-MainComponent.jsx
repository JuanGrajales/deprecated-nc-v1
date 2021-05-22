import React, { Component } from "react";
import Directory from "./DirectoryComponent";
// step 7 REMOVE
// import CampsiteInfo from "./CampsiteInfoComponent";
// step 7 REMOVE
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { CAMPSITES } from "../shared/campsites";
// step 1 ADD
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
// step 1 ADD

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      // step 2 REMOVE
      // selectedCampsite: null,
      // step 2 REMOVE
    };
  }

  // step 3 REMOVE
  // onCampsiteSelect(campsiteId) {
  //   this.setState({ selectedCampsite: campsiteId });
  // }
  // step 3 REMOVE

  render() {
    // step 4 ADD
    const HomePage = () => {
      return <Home />;
    };
    // step 4 ADD

    return (
      <div>
        <Header />
        {/* // step 5 ADD */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* // step 5 ADD */}
        {/* // step 6 REMOVE */}
        {/* <Directory
          campsites={this.state.campsites}
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        /> */}
        {/* // step 6 REMOVE */}
        <Footer />
      </div>
    );
  }
}

export default Main;
