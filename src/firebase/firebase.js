import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Oc8fbuyf4w_8adrXBrfF8HUhCWHqPJI",
  authDomain: "easy-appointments-9b69e.firebaseapp.com",
  databaseURL: "https://easy-appointments-9b69e-default-rtdb.firebaseio.com",
  projectId: "easy-appointments-9b69e",
  storageBucket: "easy-appointments-9b69e.appspot.com",
  serviceAccount: "serviceAccountKey.json", // DUMMY LINK
  messagingSenderId: "986126631929",
  appId: "1:986126631929:web:2918bd84fc41d3309bf328",
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const dp = getFirestore(app);

export { dp };
