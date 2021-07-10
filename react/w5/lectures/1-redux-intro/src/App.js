import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement, login, deleteSofa } from "./redux/complex-setup";

const App = (props) => {
  // const counterVar = useSelector((state) => state.counter);
  // const isLoggedVar = useSelector((state) => state.isLogged);
  // const sofas = useSelector((state) => state.sofas);

  const { counter, sofas, isLogged } = props;
  const dispatch = useDispatch();

  const displaysSofas = sofas.map((sofa) => <li>{sofa}</li>);

  return (
    <div>
      <h1>Redux</h1>
      <p>Counter from redfux store {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>Welcome {isLogged ? "Juan" : ""}</p>
      <button onClick={() => dispatch(login())}>Login</button>

      <h2>Sofas</h2>
      <button onClick={() => dispatch(deleteSofa())}>Delete Sofa</button>
      <ul>{displaysSofas}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);

  return { ...state };
};

export default connect(mapStateToProps)(App);
