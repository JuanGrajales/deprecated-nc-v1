import "./App.css";
let str = "hi";
function App() {
  return (
    <div className="App">
      <h1>What is JSX?</h1>
      <p>
        Pretty much looks like HTML except that you can embed JS inside of it
      </p>
      {str + " hello"}
      {5 < 1 ? "true" : "false"}
    </div>
  );
}

export default App;
