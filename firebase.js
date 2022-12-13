
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// ! Replace this with Your firebase project configs
//! start from here
const firebaseConfig = {
  apiKey: "AIzaSyCkx39_YF5_AoQsGKXLiffUTRBTxLmrHlw",
  authDomain: "sm-4a646.firebaseapp.com",
  projectId: "sm-4a646",
  storageBucket: "sm-4a646.appspot.com",
  messagingSenderId: "248338802719",
  appId: "1:248338802719:web:201604000542ee18a58d2a",
  measurementId: "G-CGRFY4TDGD"
};
//! replace thill here

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}