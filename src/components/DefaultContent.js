import logo from "../assets/logo.svg";
import { ShowCounter } from "./ShowCounter";

export const DefaultContent = () => {
  return (
    <div className="DefaultContent">
      <img src={logo} className="App-logo" alt="logo" />
      Hello World!
    </div>
  );
};
