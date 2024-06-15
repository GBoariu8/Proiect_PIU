// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE0NjkPClFyUa6nex8MeVy0VILBXiWtLU",
  authDomain: "proiectpiu-30e4a.firebaseapp.com",
  projectId: "proiectpiu-30e4a",
  storageBucket: "proiectpiu-30e4a.appspot.com",
  messagingSenderId: "887992858141",
  appId: "1:887992858141:web:77d8ccd249d713bf5478f4",
  measurementId: "G-MBBCRZ2KFY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };