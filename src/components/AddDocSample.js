import logo from "../logo.svg";
import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../App.css";

export const AddDocSample = () => {
  const [nameText, setNameText] = useState("");

  const onChangeName = (event) => {
    setNameText(event.target.value);
  };

  const onClickAdd = async () => {
    await setDoc(doc(db, "counter", "counter"), {couter: 1});
      /*
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: nameText,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    */
  };

  return (
    <div className="App">
      <input type="text" value={nameText} onChange={onChangeName} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
