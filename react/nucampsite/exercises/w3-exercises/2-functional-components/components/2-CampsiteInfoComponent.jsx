// step 6 EDIT
import React from "react";
// step 6 EDIT
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// step 4 ADD
function RenderCampsite({ campsite }) {
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
// step 4 ADD

// step 5 ADD
function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div />;
}
// step 5 ADD

// step 2 EDIT
function CampsiteInfo(props) {
  // step 2 EDIT

  // step 1 REMOVE
  //   renderCampsite(campsite) {
  //     return (
  //       <div className="col-md-5 m-1">
  //         <Card>
  //           <CardImg top src={campsite.image} alt={campsite.name} />
  //           <CardBody>
  //             <CardTitle>{campsite.name}</CardTitle>
  //             <CardText>{campsite.description}</CardText>
  //           </CardBody>
  //         </Card>
  //       </div>
  //     );
  //   }

  //   renderComments(comments) {
  //     if (comments) {
  //       return (
  //         <div className="col-md-5 m-1">
  //           <h4>Comments</h4>
  //           {comments.map((comment) => {
  //             return (
  //               <div key={comment.id}>
  //                 <p>
  //                   {comment.text}
  //                   <br />
  //                   -- {comment.author},{" "}
  //                   {new Intl.DateTimeFormat("en-US", {
  //                     year: "numeric",
  //                     month: "short",
  //                     day: "2-digit",
  //                   }).format(new Date(Date.parse(comment.date)))}
  //                 </p>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     }
  //     return <div />;
  //   }

  //   render() {
  // step 1 REMOVE

  // step 2 EDIT
  if (props.campsite) {
    // step 2 EDIT
    return (
      <div className="container">
        <div className="row">
          {/* // step 3 EDIT */}
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.campsite.comments} />
          {/* // step 3 EDIT */}
        </div>
      </div>
    );
  }
  return <div />;
  //   } // step 1 REMOVE
}

export default CampsiteInfo;
