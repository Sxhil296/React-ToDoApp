// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt4KlnroEWPDtRaUIVXvFcw5Y2nkJnvTQ",
  authDomain: "todo-app-ecd67.firebaseapp.com",
  projectId: "todo-app-ecd67",
  storageBucket: "todo-app-ecd67.appspot.com",
  messagingSenderId: "301616478500",
  appId: "1:301616478500:web:07788fb4da5652b269dbb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)