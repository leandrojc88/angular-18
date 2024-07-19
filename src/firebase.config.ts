// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc780GxzCbVWENFZSsBn72zT7YdL2Is1Q",
  authDomain: "leandro-dev-2d04f.firebaseapp.com",
  projectId: "leandro-dev-2d04f",
  storageBucket: "leandro-dev-2d04f.appspot.com",
  messagingSenderId: "996248842876",
  appId: "1:996248842876:web:629b0d36d1e5b776f5cff9",
  measurementId: "G-VM68269NXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);