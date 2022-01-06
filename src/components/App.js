import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Products } from "./Products";
import { Profile } from "./Profile";
import { DefaultContent } from "./DefaultContent";
import "../assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Side">
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/profile">プロフィール</Link></li>
            <li><Link to="/products">創作物</Link></li>
          </ul>
        </div>
        <div className="Content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<DefaultContent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
