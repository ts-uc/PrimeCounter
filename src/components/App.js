import logo from "../logo.svg";
import { GetAndSetCounter } from "./GetAndSetCounter.js";
import "../assets/App.css";

function App() {
  return (
    <div className="App">
      <div className="Side">サイドバーです</div>
      <div className="Content">
        <img src={logo} className="App-logo" alt="logo" />
        <GetAndSetCounter />
      </div>
    </div>
  );
}

export default App;
