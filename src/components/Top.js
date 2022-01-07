import {ShowCounter} from "./ShowCounter"
import star_and_me from "../assets/star_and_me.jpg"

export const Top = () => {
    return (
      <div className="Top">
        <ShowCounter />
        <h1>T.U. のポートフォリオへようこそ</h1>
        <img src={star_and_me} width="50%" />
      </div>
    );
  };
  