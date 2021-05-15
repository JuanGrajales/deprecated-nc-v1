import React, { Component } from "react";

class CampsiteInfo extends Component {
  render() {
    // only display the data of the campsite if the data exists (i.e. when the user clicks on a campsite)
    if (this.props.campsite) {
      return <div className="row">campsite info when it has been selected</div>;
    }
    // if the user hasn't clicked on a campsite then display nothing
    return <div>no campsite selected yet</div>;
  }
}

export default CampsiteInfo;
