// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLTY0qcFVCyo2o3Q6-9OfwDyXAYbxih2o",
  authDomain: "famous-chef.firebaseapp.com",
  projectId: "famous-chef",
  storageBucket: "famous-chef.appspot.com",
  messagingSenderId: "477367992813",
  appId: "1:477367992813:web:89dc0c67a170f17601a7e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;