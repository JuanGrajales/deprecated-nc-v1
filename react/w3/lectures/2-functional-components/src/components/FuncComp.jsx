// How do we create a functional component? rsc (hint: remember rcc)
// How to call props in a functional component? props.propName (hint: in class {this.props.propName})

import React from "react";

const FuncComp = ({
  propName1,
  propName2,
  propName3,
  propName4,
  propName5,
}) => {
  return (
    <div>
      <ul>
        <li>{propName1}</li>
        <li>{propName2}</li>
        <li>{propName3}</li>
        <li>{propName4}</li>
        <li>{propName5}</li>
      </ul>
    </div>
  );
};

export default FuncComp;
