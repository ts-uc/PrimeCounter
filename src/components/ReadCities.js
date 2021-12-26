import React, { useState } from 'react';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../App.css";

export const ReadCities = () => {
  const [docData, setDocData] = useState({})
  const docRef = doc(db, "cities", "SF");

  const onClickAdd = async () => {
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDocData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  
  }
  return (
    <div className="App">
      <button onClick={onClickAdd}>Read CIty</button>
      {docData.country}
    </div>
  );
};
