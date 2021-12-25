// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNS3E58YFUHla8t0tsCpPcdUwZdoWwgaw",
  authDomain: "primecounter-925a2.firebaseapp.com",
  databaseURL:
    "https://primecounter-925a2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "primecounter-925a2",
  storageBucket: "primecounter-925a2.appspot.com",
  messagingSenderId: "659741177243",
  appId: "1:659741177243:web:1ad0899493b72200ccdd3e",
  measurementId: "G-72TTQ0V3GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default analytics;
export default db;
