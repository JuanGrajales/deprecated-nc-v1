import "./App.css";
import { message, name } from "./lecture/export";
import returnMessage from "./lecture/export";
import Comp from "./lecture/Comp";

function App() {
  return (
    <div className="App">
      <h1>Sup everyone :)</h1>
      <h3>{message}</h3>
      <h3>{name}</h3>
      <h3>{returnMessage()}</h3>
      <h3>
        <Comp />
      </h3>
    </div>
  );
}

export default App;
