// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB01Z1JIU05tigJuErk9Tu9SG0O51xRRdA",
  authDomain: "tse-memories.firebaseapp.com",
  projectId: "tse-memories",
  storageBucket: "tse-memories.appspot.com",
  messagingSenderId: "87216769616",
  appId: "1:87216769616:web:f5b5cd95dfa093ec875f55",
  measurementId: "G-DTH17G0TWX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
