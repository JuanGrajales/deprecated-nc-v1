import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
// step 1 EDIT ADD
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// step 1 EDIT ADD
// step 2 REMOVE
// import { CAMPSITES } from "../shared/campsites";
// import { COMMENTS } from "../shared/comments";
// import { PARTNERS } from "../shared/partners";
// import { PROMOTIONS } from "../shared/promotions";
// step 2 REMOVE
// step 3 ADD
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    // campsites: state.campsites,
    // comments: state.comments,
    // partners: state.partners,
    // promotions: state.promotions,
  };
};
// step 3 ADD

class Main extends Component {
  // step 9 REMOVE
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       campsites: CAMPSITES,
  //       comments: COMMENTS,
  //       partners: PARTNERS,
  //       promotions: PROMOTIONS,
  //     };
  //   }
  // step 9 REMOVE

  render() {
    const HomePage = () => {
      return (
        <Home
          // step 4 EDIT
          campsite={
            this.props.campsites.filter((campsite) => campsite.featured)[0]
          }
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
          // step 4 EDIT
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          // step 5 EDIT
          campsite={
            this.props.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          // step 5 EDIT
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            // step 6 EDIT
            render={() => <Directory campsites={this.props.campsites} />}
            // step 6 EDIT
          />
          <Route
            exact
            path="/aboutus"
            // step 7 EDIT
            render={() => <About partners={this.props.partners} />}
            // step 7 EDIT
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// step 8 EDIT ADD
export default withRouter(connect(mapStateToProps)(Main));
// step 8 EDIT ADD
