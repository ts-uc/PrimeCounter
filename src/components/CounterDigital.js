import React, { useContext } from "react";
import { CountContext } from "../pages/App";
export const CounterDigital = () => {
  const { counter, prime } = useContext(CountContext);
  if (counter == -1) {
    return <>{"__LOADING__"}</>;
  } else if (counter != -1 && prime == -1) {
    return <>{"CALCULATING"}</>;
  }
    return <>{("00000000000" +prime).slice(-11)}</>;
};
