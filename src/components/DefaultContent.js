import logo from "../assets/logo.svg";
import { GetAndSetCounter } from "./GetAndSetCounter.js";

export const DefaultContent = () => {
  return (
    <div className="DefaultContent">
      <img src={logo} className="App-logo" alt="logo" />
      <GetAndSetCounter />
    </div>
  );
};
