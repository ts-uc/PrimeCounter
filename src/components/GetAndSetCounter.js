import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../App.css";

export const GetAndSetCounter = () => {
  const [counter, setCounter] = useState(-1);
  const docRef = doc(db, "counter", "counter");

  useEffect(async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setCounter(docSnap.data().counter);
    } else {
      console.log("No such document!");
    }
  }, []);

  useEffect(async () => {
    console.log("counter");
    if (counter != -1) {
      await setDoc(doc(db, "counter", "counter"), { counter: counter + 1 });
    }
  }, [counter]);

  return <div className="App">{counter}</div>;
};
