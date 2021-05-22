import React, { Component } from "react";
// step 2 REMOVE
// import { Navbar, NavbarBrand } from "reactstrap";
// step 2 REMOVE
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
// step 1 ADD
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
// step 1 ADD
import { CAMPSITES } from "../shared/campsites";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }

  render() {
    return (
      <div>
        {/* // step 3 REMOVE */}
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar> */}
        {/* // step 3 REMOVE */}
        {/* // step 4 ADD */}
        <Header />
        {/* // step 4 ADD */}
        <Directory
          campsites={this.state.campsites}
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
        {/* // step 5 ADD */}
        <Footer />
        {/* // step 5 ADD */}
      </div>
    );
  }
}

export default Main;
