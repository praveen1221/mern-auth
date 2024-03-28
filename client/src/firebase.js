// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-16bb9.firebaseapp.com",
  projectId: "mern-auth-16bb9",
  storageBucket: "mern-auth-16bb9.appspot.com",
  messagingSenderId: "483163036772",
  appId: "1:483163036772:web:7d7ab030c587241a65d371"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);