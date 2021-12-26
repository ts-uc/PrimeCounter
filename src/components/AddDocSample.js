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
  };

  return (
    <div className="App">
      <input type="text" value={nameText} onChange={onChangeName} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
