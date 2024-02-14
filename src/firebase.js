// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQNjTNQg1uir5ZPE_zMq7NWsKs5Mfnk-I",
  authDomain: "maca-new.firebaseapp.com",
  projectId: "maca-new",
  storageBucket: "maca-new.appspot.com",
  messagingSenderId: "1047665209780",
  appId: "1:1047665209780:web:e23626654c4536ff3dc2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);