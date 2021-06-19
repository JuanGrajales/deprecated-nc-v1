import "./App.css";
let str = "hi";
const userIsLoggedIn = false;
function App() {
  return (
    <div className="App">
      <h1>What is JSX?</h1>
      <p>
        Pretty much looks like HTML except that you can embed JS inside of it
      </p>
      <div>{3 + 5}</div>
      <div>{str + " hello"}</div>
      <div>{5 < 1 ? "true" : "false"}</div>
      <div>{userIsLoggedIn ? "Hi Juan" : "Login Here"}</div>
    </div>
  );
}

export default App;
