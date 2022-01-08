import React, { useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetAndSetCounter = (props) => {
  const docRef = doc(db, "counter", "counter");

  useEffect(async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        props.setCounter(docSnap.data().counter);
      } else {
        props.setError(true);
      }
    } catch (e) {
      props.setError(true);
    }
  }, []);

  useEffect(async () => {
    if (props.counter != -1) {
      await setDoc(doc(db, "counter", "counter"), {
        counter: props.counter + 1,
      });
    }
  }, [props.counter]);

  return <></>;
};
