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
      {/* {3 + 5}
      {str + " hello"}
      {5 < 1 ? "true" : "false"} */}
      {userIsLoggedIn ? "Hi Juan" : "Login Here"}
    </div>
  );
}

export default App;
