/** @format */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG9f1_zRo9lgJ7RkWe919HKje3Mdxuunk",
  authDomain: "login-app-ec84a.firebaseapp.com",
  projectId: "login-app-ec84a",
  storageBucket: "login-app-ec84a.appspot.com",
  messagingSenderId: "424425196979",
  appId: "1:424425196979:web:844dddd84383f24f280fc6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db, storage };
