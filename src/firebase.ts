import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, EmailAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyB1ZqQ6iBYtVlnRuxphwjoSwJlKPNLkiPY",
  authDomain: "linkedin-clone-ed5d3.firebaseapp.com",
  projectId: "linkedin-clone-ed5d3",
  storageBucket: "linkedin-clone-ed5d3.appspot.com",
  messagingSenderId: "127303274325",
  appId: "1:127303274325:web:cfb8d18bf410c53f54a9dc",
  measurementId: "G-EJYJ4P4D6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to Database in Firestore
export const db = getFirestore(app);