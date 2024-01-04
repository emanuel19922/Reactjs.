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
  apiKey: "AIzaSyCHi2enq5EDqjmO_OQ1d_bwVeF701PGDNE",
  authDomain: "miapp-d9e28.firebaseapp.com",
  projectId: "miapp-d9e28",
  storageBucket: "miapp-d9e28.appspot.com",
  messagingSenderId: "620161015635",
  appId: "1:620161015635:web:38cb137b7d76c59ac7cba6",
  measurementId: "G-E8GMVHZ24M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

