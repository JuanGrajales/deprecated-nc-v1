import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./redux/complex-setup";

const App = () => {
  const counterVar = useSelector((state) => state.counter);
  const isLoggedVar = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux</h1>
      <p>Counter from redfux store {counterVar}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>Welcome {isLoggedVar ? "Juan" : ""}</p>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default App;
