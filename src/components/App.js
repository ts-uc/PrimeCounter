import { useState } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Products } from "./Products";
import { Profile } from "./Profile";
import { Contact } from "./Contact"
import { Top } from "./Top";
import "../assets/App.css";
import { GetAndSetCounter } from "./GetAndSetCounter";
import { CalcPrime } from "./CalcPrime"

function App() {
  const [counter, setCounter] = useState(-1);
  const [prime, setPrime] = useState(-1);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Side">
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/profile">プロフィール</Link></li>
            <li><Link to="/products">創作物</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li>counter: {counter}</li>
            <li>prime: {prime}</li>
          </ul>
        </div>
        <div className="Content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Top />} />
          </Routes>
        </div>
      </div>
      <GetAndSetCounter counter={counter} setCounter={setCounter} />
      <CalcPrime counter={counter} setPrime={setPrime} />
    </BrowserRouter>
  );
}

export default App;
