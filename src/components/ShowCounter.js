import React, { useContext } from "react";
import {CountContext} from "./App"
export const ShowCounter = () => {
  const {counter, prime} = useContext(CountContext);
  if (counter == -1) {
    return <div>読み込み中…</div>;
  }
  return (
    <div>
      <div>{prime}</div>
      <div>あなたは {counter}番目のお客様です</div>
      <div>{counter}番目の素数は、{prime}です。</div>
    </div>
  );
};
