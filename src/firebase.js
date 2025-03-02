// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABwxnG0rhKoT1Hs-QnwguClv_cM8MnXbw",
  authDomain: "philipandpen-46cf9.firebaseapp.com",
  projectId: "philipandpen-46cf9",
  storageBucket: "philipandpen-46cf9.appspot.com",
  messagingSenderId: "753518195115",
  appId: "1:753518195115:web:59e3a7e6a27e64427822ee",
  measurementId: "G-ZZNM22C25S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

//export default app;