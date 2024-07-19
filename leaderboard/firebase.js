// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKtF9q4SDgNYrZWcL3y4zEfGAxNMgalKY",
  authDomain: "leaderboard-aedd6.firebaseapp.com",
  projectId: "leaderboard-aedd6",
  storageBucket: "leaderboard-aedd6.appspot.com",
  messagingSenderId: "755345279053",
  appId: "1:755345279053:web:fe66e53fe4ff08b1d33404",
  measurementId: "G-VYC902L21M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);