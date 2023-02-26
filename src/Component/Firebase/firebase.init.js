// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqjuPcuJOTBA_2CX3BDxsm2jFV11bgfwU",
    authDomain: "prosplum.firebaseapp.com",
    projectId: "prosplum",
    storageBucket: "prosplum.appspot.com",
    messagingSenderId: "7822008555",
    appId: "1:7822008555:web:92616da87b865db878deae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;