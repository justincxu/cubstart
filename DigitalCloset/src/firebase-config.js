// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAniZFEtVVI78rjvtvIarA4btcbufjO5Po",
  authDomain: "bearwear-bef05.firebaseapp.com",
  projectId: "bearwear-bef05",
  storageBucket: "bearwear-bef05.appspot.com",
  messagingSenderId: "948224064418",
  appId: "1:948224064418:web:4930d3f0838c73919690fb",
  measurementId: "G-GF37MDEKR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const auth = getAuth(app);
