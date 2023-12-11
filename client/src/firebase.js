// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authapp-54689.firebaseapp.com",
  projectId: "authapp-54689",
  storageBucket: "authapp-54689.appspot.com",
  messagingSenderId: "1052267121359",
  appId: "1:1052267121359:web:39baeb4e63b66cf84b85ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);