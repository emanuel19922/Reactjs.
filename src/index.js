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
  apiKey: "AIzaSyBVPHoaxUoEZSWaQqCBbGV1T-bTOu9dt90",
  authDomain: "products-db610.firebaseapp.com",
  projectId: "products-db610",
  storageBucket: "products-db610.appspot.com",
  messagingSenderId: "796306797266",
  appId: "1:796306797266:web:5f9677e12296dc4e45730b",
  measurementId: "G-8BR54DKJP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

