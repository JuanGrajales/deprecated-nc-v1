// How do we create a functional component? (hint: remember rcc)
// How to call props in a functional component? (hint: in class {this.props.propName})

import React from "react";

const FuncComp = (props) => {
  return (
    <div>
      <ul>
        <li>{props.propName1}</li>
        <li>{props.propName2}</li>
        <li>{props.propName3}</li>
        <li>{props.propName4}</li>
        <li>{props.propName5}</li>
      </ul>
    </div>
  );
};

export default FuncComp;
