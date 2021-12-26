import logo from "../logo.svg";
import { AddDocSample } from "./AddDocSample";
import { AddCities } from "./AddCities";

import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Hello World!</div>
        </p>
        <AddDocSample />
        <AddCities />
      </header>
    </div>
  );
}

export default App;
