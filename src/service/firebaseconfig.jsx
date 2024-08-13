// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmymOoHu0X3xasZbsEeOdV449BOHFXl3k",
  authDomain: "my-project-dff6d.firebaseapp.com",
  projectId: "my-project-dff6d",
  storageBucket: "my-project-dff6d.appspot.com",
  messagingSenderId: "76290520832",
  appId: "1:76290520832:web:8a7ee6382ca98d4a0a65e5",
  measurementId: "G-3JTGT32R66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);