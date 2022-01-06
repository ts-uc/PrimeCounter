import { DefaultContent } from "./DefaultContent";
import "../assets/App.css";

function App() {
  return (
    <div className="App">
      <div className="Side">サイドバーです</div>
      <div className="Content">
        <DefaultContent />
      </div>
    </div>
  );
}

export default App;
