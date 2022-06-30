// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqgTriXI8eLtrBSOJWA5pgKGdVjeb6uBc",
  authDomain: "easy-appointment-19b4b.firebaseapp.com",
  projectId: "easy-appointment-19b4b",
  storageBucket: "easy-appointment-19b4b.appspot.com",
  messagingSenderId: "1075103439080",
  appId: "1:1075103439080:web:55d85e192bdfb8050ad15d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);
