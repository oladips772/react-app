/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG9f1_zRo9lgJ7RkWe919HKje3Mdxuunk",
  authDomain: "login-app-ec84a.firebaseapp.com",
  projectId: "login-app-ec84a",
  storageBucket: "login-app-ec84a.appspot.com",
  messagingSenderId: "424425196979",
  appId: "1:424425196979:web:844dddd84383f24f280fc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
