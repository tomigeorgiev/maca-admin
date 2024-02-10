// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNs7o_sifgAr9CceDFmZ-LczqL7LqbZjo",
  authDomain: "maca-admin.firebaseapp.com",
  projectId: "maca-admin",
  storageBucket: "maca-admin.appspot.com",
  messagingSenderId: "915452481518",
  appId: "1:915452481518:web:514d3bc97b43c1434008ff",
  measurementId: "G-34CQMH4Q3R"
};

// Initialize Firebas

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
