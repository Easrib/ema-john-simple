// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS9Yhv8DCLIRiq2XuRthnhbLLKa3-aW1k",
    authDomain: "ema-john-simple-fec4c.firebaseapp.com",
    projectId: "ema-john-simple-fec4c",
    storageBucket: "ema-john-simple-fec4c.appspot.com",
    messagingSenderId: "998274908422",
    appId: "1:998274908422:web:45fb8142e12e793ce31e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;