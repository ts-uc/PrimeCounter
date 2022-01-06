import React, { useState, useEffect } from "react";
import { ShowPrime } from "./ShowPrime";

export const CalcPrime = (props) => {
  const [prime, setPrime] = useState(-1);

  function Prime(n) {
    if (n < 1 || 1000000 < n) return 0;
    var iPrimes = new Array();
    iPrimes.push(2);
    for (var i = 3; iPrimes.length < n; i += 2) {
      for (var j in iPrimes) {
        var p = iPrimes[j];
        if (p * p > i) {
          iPrimes.push(i);
          break;
        }
        if (i % p == 0) break;
      }
    }
    return iPrimes.pop();
  }

  useEffect(() => {
    if(props.counter != -1){
      props.setPrime(Prime(props.counter))
    }
  },[props.counter])

  return <></>;
};
