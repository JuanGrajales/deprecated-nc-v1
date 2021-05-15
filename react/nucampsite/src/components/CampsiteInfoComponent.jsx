import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
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
  render() {
    // only display the data of the campsite if the data exists (i.e. when the user clicks on a campsite)
    if (this.props.campsite) {
      return (
        <div className="row">{this.renderCampsite(this.props.campsite)}</div>
      );
    }
    // if the user hasn't clicked on a campsite then display nothing
    return <div>no campsite selected yet</div>;
  }
}

export default CampsiteInfo;
