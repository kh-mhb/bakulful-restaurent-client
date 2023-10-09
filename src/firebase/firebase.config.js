// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoawlzt7_gTyKAf1C8GkdmakInZypR1Dg",
  authDomain: "bakulful-restaurant.firebaseapp.com",
  projectId: "bakulful-restaurant",
  storageBucket: "bakulful-restaurant.appspot.com",
  messagingSenderId: "716272307150",
  appId: "1:716272307150:web:82ac1261608f2e5c97f99f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;