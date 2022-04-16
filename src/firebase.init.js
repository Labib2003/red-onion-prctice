// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6BUYlV9NBCObDeGGCSdoDHWUsnpMz1jk",
    authDomain: "red-onion-practice-a522e.firebaseapp.com",
    projectId: "red-onion-practice-a522e",
    storageBucket: "red-onion-practice-a522e.appspot.com",
    messagingSenderId: "337451386118",
    appId: "1:337451386118:web:a661822d4f5b524d294a87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;