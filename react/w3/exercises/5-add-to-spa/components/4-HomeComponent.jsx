import React from "react";
// step 1 ADD
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}
// step 1 ADD

function Home(props) {
  return (
    <div className="container">
      {/* // step 2 EDIT */}
      <div className="row">
        <div className="col-md m-1">
          <RenderCard item={props.campsite} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.partner} />
        </div>
      </div>
      {/* // step 2 EDIT */}
    </div>
  );
}

export default Home;
