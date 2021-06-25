import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
// step 1 ADD
import { Link } from "react-router-dom";
// step 1 ADD

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      {/* // step 2 EDIT */}
      <Link to={`/directory/${campsite.id}`}>
        {/* // step 2 EDIT */}
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
        {/* // step 2 EDIT */}
      </Link>
      {/* // step 2 EDIT */}
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
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
