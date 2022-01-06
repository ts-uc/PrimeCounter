import React, { useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetAndSetCounter = (props) => {
  const docRef = doc(db, "counter", "counter");

  useEffect(async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      props.setCounter(docSnap.data().counter);
    } else {
      console.log("No such document!");
    }
  }, []);

  useEffect(async () => {
    console.log("counter");
    if (props.counter != -1) {
      await setDoc(doc(db, "counter", "counter"), { counter: props.counter + 1 });
    }
  }, [props.counter]);

  return <></>;
};
