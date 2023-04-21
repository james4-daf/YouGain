// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPfOa0QVhIH4wrb73wTfgm-tB7WcgJTao",
  authDomain: "yougain-b3029.firebaseapp.com",
  projectId: "yougain-b3029",
  storageBucket: "yougain-b3029.appspot.com",
  messagingSenderId: "440131942238",
  appId: "1:440131942238:web:adb3b9ba1d292aa04e41cf",
  measurementId: "G-Y4FRV7HK9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}