import logo from "../logo.svg";
import { GetAndSetCounter } from "./GetAndSetCounter.js";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetAndSetCounter />
      </header>
    </div>
  );
}

export default App;
