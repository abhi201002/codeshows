// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwkId45ONCZxxelISTuu1zgT39cXrxvos",
  authDomain: "codeshows-1e6d1.firebaseapp.com",
  projectId: "codeshows-1e6d1",
  storageBucket: "codeshows-1e6d1.appspot.com",
  messagingSenderId: "779107512138",
  appId: "1:779107512138:web:0fb43788efa039c7989bb3",
  measurementId: "G-XM4922Q3MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);