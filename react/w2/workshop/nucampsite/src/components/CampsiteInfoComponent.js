import React, { Component } from "react";

class CampsiteInfo extends Component {
  render() {
    if (this.props.campsite) {
      return <div className="row">campsite selected</div>;
    } else {
      return <div>No campsite selected</div>;
    }
  }
}

export default CampsiteInfo;
