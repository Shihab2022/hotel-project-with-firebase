// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPOEXmXfgwaxrkcQEA7vcY_5BFCwCn8po",
  authDomain: "hotel-project-with-firebase.firebaseapp.com",
  projectId: "hotel-project-with-firebase",
  storageBucket: "hotel-project-with-firebase.appspot.com",
  messagingSenderId: "941086905623",
  appId: "1:941086905623:web:5aad1492e5cbaee33b1352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth
