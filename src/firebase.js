import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFQtck6r8U0nXKNTjRt-BRSFTye2jFSSI",
  authDomain: "registration-form-423b1.firebaseapp.com",
  databaseURL: "https://registration-form-423b1-default-rtdb.firebaseio.com",
  projectId: "registration-form-423b1",
  storageBucket: "registration-form-423b1.appspot.com",
  messagingSenderId: "734788046233",
  appId: "1:734788046233:web:9bfc0babbe3fc16950d708",
  measurementId: "G-6H3PDGN9T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);