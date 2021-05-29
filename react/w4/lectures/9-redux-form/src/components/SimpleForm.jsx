import React from "react";
import { LocalForm, Control } from "react-redux-form";

const SimpleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <Control.text model=".username" placeholder="username" />
        <Control.text model=".email" placeholder="email" />
        <Control.text model=".password" placeholder="password" />
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default SimpleForm;
