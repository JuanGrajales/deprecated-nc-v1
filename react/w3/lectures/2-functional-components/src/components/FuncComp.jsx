// How do we create a functional component? rsc React Stateless Component (hint: remember rcc React Class Component)
// How to call props in a functional component? {props.propName} (hint: in class {this.props.propName})

import React from "react";

const FuncComp = ({ actionsMovies }) => {
  return <div>{actionsMovies}</div>;
};

export default FuncComp;
