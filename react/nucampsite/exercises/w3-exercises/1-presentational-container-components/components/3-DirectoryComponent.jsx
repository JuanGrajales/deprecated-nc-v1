import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
// step 1 REMOVE
// import CampsiteInfo from "./CampsiteInfoComponent";
// step 1 REMOVE

class Directory extends Component {
  // step 2 REMOVE
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedCampsite: null,
  //   };
  // }

  // onCampsiteSelect(campsite) {
  //   this.setState({ selectedCampsite: campsite });
  // }
  // step 2 REMOVE

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          {/* // step 4 EDIT */}
          <Card onClick={() => this.props.onClick(campsite.id)}>
            {/* // step 4 EDIT */}
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        {/* // step 3 REMOVE */}
        {/* <CampsiteInfo campsite={this.state.selectedCampsite} /> */}
        {/* // step 3 REMOVE */}
      </div>
    );
  }
}

export default Directory;
