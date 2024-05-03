// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA53XFNl9so-1_udmxIXoRmegyFg1iY2PU",
  authDomain: "app-login-firebase-ef638.firebaseapp.com",
  databaseURL: "https://app-login-firebase-ef638-default-rtdb.firebaseio.com/",
  projectId: "app-login-firebase-ef638",
  storageBucket: "app-login-firebase-ef638.appspot.com",
  messagingSenderId: "337735490925",
  appId: "1:337735490925:web:465275bebcf3cc9d500e64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
