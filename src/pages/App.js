import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import "../assets/App.css";
import { GetAndSetCounter } from "../components/GetAndSetCounter";
import { CalcPrime } from "../components/CalcPrime";

export const CountContext = createContext();

function App() {
  const [counter, setCounter] = useState(-1);
  const [prime, setPrime] = useState(-1);
  const [error, setError] = useState(false);
  const value = { counter, prime, error };
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="SideBar">
          <SideBar />
        </nav>
        <div className="Content">
          <CountContext.Provider value={value}>
            <Content />
          </CountContext.Provider>
        </div>
      </div>
      <GetAndSetCounter counter={counter} setCounter={setCounter} setError={setError} />
      <CalcPrime counter={counter} setPrime={setPrime} />
    </BrowserRouter>
  );
}

export default App;
