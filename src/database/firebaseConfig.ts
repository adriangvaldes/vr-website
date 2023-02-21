import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOGn62qcdattZUh8GEHv3ViMo-wdoL8vM",
  authDomain: "vr-stock-management.firebaseapp.com",
  projectId: "vr-stock-management",
  storageBucket: "vr-stock-management.appspot.com",
  messagingSenderId: "246317338454",
  appId: "1:246317338454:web:9e942af17ee6ad138cd0f7",
  measurementId: "G-J4LRE3GBQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
