// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase, ref, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcFAqjSg63VrHgbs5GzYeANd_FP4dVKO4",
  authDomain: "project1-7be1b.firebaseapp.com",
  databaseURL: "https://project1-7be1b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-7be1b",
  storageBucket: "project1-7be1b.firebasestorage.app",
  messagingSenderId: "814937210463",
  appId: "1:814937210463:web:0c3c2d11dc6bc7d6e025ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export{database, ref, onValue}