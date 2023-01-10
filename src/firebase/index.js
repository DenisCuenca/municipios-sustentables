// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyATjkvmEGBcybRliCfK8F5ab6wUCE-7XxU",

  authDomain: "municipios-sustentables-460f8.firebaseapp.com",

  projectId: "municipios-sustentables-460f8",

  storageBucket: "municipios-sustentables-460f8.appspot.com",

  messagingSenderId: "797788249882",

  appId: "1:797788249882:web:a4519723a4dffa2f2c16a3"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);