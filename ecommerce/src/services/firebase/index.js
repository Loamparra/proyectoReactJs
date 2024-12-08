// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrxqsEsEHshNQciu2iRTqUcKfNTaevF8o",
    authDomain: "proyectoreact-f77ed.firebaseapp.com",
    projectId: "proyectoreact-f77ed",
    storageBucket: "proyectoreact-f77ed.firebasestorage.app",
    messagingSenderId: "590599418940",
    appId: "1:590599418940:web:45c32d6b97a87fc02d3f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);