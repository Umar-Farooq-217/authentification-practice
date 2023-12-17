// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWt2eSlFp8D_QRtYXHj1pHxR4bcya-0CM",
  authDomain: "authentification-29c29.firebaseapp.com",
  projectId: "authentification-29c29",
  storageBucket: "authentification-29c29.appspot.com",
  messagingSenderId: "895699538051",
  appId: "1:895699538051:web:1aa6b7db0f5fdc1bc34bb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)