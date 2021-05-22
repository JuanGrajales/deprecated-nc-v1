import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>{props.match.params.user} profile</h1>
      <img src="https://placekitten.com/200/300" alt="juan" />
    </div>
  );
};

export default Profile;
