import { createStore, combineReducers } from "redux";

// actions

// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};

// reducers
export const counterReducer = (state = 0, action) => {
  console.log("counterReducer check: ", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
  }
};

export const loggedReducer = (state = false, action) => {
  console.log("loggedReducer check: ", action);
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

// combine reducers
export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// if you want to make a change to the data in the state of your redux store then you will have to dispatch an action

// four main concepts of redux: actions (are objects and they describe what is going to change in the store and can have a value, often called a payload, that will tell the store the new value of the state), reducers (reducers will actually provide the new value of the state based on the action), store (where the data is saved), dispatch (a method that send the action to the store and then the store sends it to all the reducers)

// making components, props, state, just basic react concepts
// put redux on the back burner
