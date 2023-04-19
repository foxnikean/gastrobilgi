// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3boTZs4C9htWsQ7eseF5ucMz4wPR7uGI",
  authDomain: "gastrobilgi-446b6.firebaseapp.com",
  projectId: "gastrobilgi-446b6",
  storageBucket: "gastrobilgi-446b6.appspot.com",
  messagingSenderId: "40872950408",
  appId: "1:40872950408:web:72e7301f967f1efa12bd3d",
  measurementId: "G-Q7ZBL1TPHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);