import React from "react";
// step 1 EDIT
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
// step 1 EDIT
import { Link } from "react-router-dom";

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Directory(props) {
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });

  return (
    <div className="container">
      {/* // step 2 ADD */}
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      {/* // step 2 ADD */}
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
