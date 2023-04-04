import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ9lBzu0-QrYJ_Bg9iQ1810OmbHclxgpY",
  authDomain: "proyecto-final-peressin.firebaseapp.com",
  projectId: "proyecto-final-peressin",
  storageBucket: "proyecto-final-peressin.appspot.com",
  messagingSenderId: "219341950022",
  appId: "1:219341950022:web:d9df51a064323dbe5fce47"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

