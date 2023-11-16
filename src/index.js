import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUA-foJ9468_SWqE7svOt3DYSUghzQcw",
  authDomain: "miapp2-1c728.firebaseapp.com",
  projectId: "miapp2-1c728",
  storageBucket: "miapp2-1c728.appspot.com",
  messagingSenderId: "621493650022",
  appId: "1:621493650022:web:7c653c42a17b89cb61a3a7",
  measurementId: "G-K0WR28EGP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

