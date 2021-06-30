// step 1 ADD
import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
// step 1 ADD
