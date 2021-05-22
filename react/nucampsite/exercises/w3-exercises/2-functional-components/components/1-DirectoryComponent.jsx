// step 5 EDIT
import React from "react";
// step 5 EDIT
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// step 4 ADD
function RenderDirectoryItem({ campsite, onClick }) {
  return (
    <Card onClick={() => onClick(campsite.id)}>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}
// step 4 ADD

// step 1 EDIT
function Directory(props) {
  // step 1 EDIT

  // step 2 REMOVE
  //   render() {
  //     const directory = this.props.campsites.map((campsite) => {
  //       return (
  //         <div key={campsite.id} className="col-md-5 m-1">
  //           <Card onClick={() => this.props.onClick(campsite.id)}>
  //             <CardImg width="100%" src={campsite.image} alt={campsite.name} />
  //             <CardImgOverlay>
  //               <CardTitle>{campsite.name}</CardTitle>
  //             </CardImgOverlay>
  //           </Card>
  //         </div>
  //       );
  //     });
  // step 2 REMOVE

  // step 3 ADD
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
      </div>
    );
  });
  // step 3 ADD

  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
  //   } // step 2 REMOVE
}

export default Directory;
