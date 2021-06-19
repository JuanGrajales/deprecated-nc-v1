import React, { Component } from "react";
// step 2 NEW
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// step 2 NEW

class CampsiteInfo extends Component {
  // step 1 NEW
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  // step 1 NEW

  render() {
    if (this.props.campsite) {
      return (
        <div className="row">{this.renderCampsite(this.props.campsite)}</div>
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
