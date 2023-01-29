// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBaNr9snAoZTC0T7EdHaBj3xvut2_rpWU",
  authDomain: "rice-estimatia.firebaseapp.com",
  projectId: "rice-estimatia",
  storageBucket: "rice-estimatia.appspot.com",
  messagingSenderId: "285272956913",
  appId: "1:285272956913:web:0dfb51b83ca0bbbeda2e50",
  measurementId: "G-TH7M3RYG3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);