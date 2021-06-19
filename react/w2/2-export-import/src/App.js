import "./App.css";
import { message } from "./lecture/export";
import returnMessage from "./lecture/export";

function App() {
  return (
    <div className="App">
      <h1>Sup everyone :)</h1>
      <h3>{message}</h3>
      <h3>{returnMessage()}</h3>
    </div>
  );
}

export default App;
