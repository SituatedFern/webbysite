import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBIC0re12EwlrBBUzA2c8wb8scTRQKgAU0",
  authDomain: "newsletter-5a7c3.firebaseapp.com",
  projectId: "newsletter-5a7c3",
  storageBucket: "newsletter-5a7c3.appspot.com",
  messagingSenderId: "436713941226",
  appId: "1:436713941226:web:ceabf57bb679c9b8838f93",
});

const db = getFirestore();

export { db };
