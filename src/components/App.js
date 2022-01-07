import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Products } from "./Products";
import { Profile } from "./Profile";
import { Contact } from "./Contact";
import { Top } from "./Top";
import "../assets/App.css";
import { GetAndSetCounter } from "./GetAndSetCounter";
import { CalcPrime } from "./CalcPrime";

export const CountContext = createContext();

function App() {
  const [counter, setCounter] = useState(-1);
  const [prime, setPrime] = useState(-1);
  const value = { counter, prime };
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="SideBar">
          <SideBar />
        </nav>
        <div className="Content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={
                <CountContext.Provider value={value}>
                  <Top />
                </CountContext.Provider>
              }
            />
          </Routes>
        </div>
      </div>
      <GetAndSetCounter counter={counter} setCounter={setCounter} />
      <CalcPrime counter={counter} setPrime={setPrime} />
    </BrowserRouter>
  );
}

export default App;
