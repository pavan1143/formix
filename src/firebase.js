// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdpc9NTkDENYEo7kkn3d50mvcyemGSbM",
  authDomain: "formix-970cd.firebaseapp.com",
  projectId: "formix-970cd",
  storageBucket: "formix-970cd.appspot.com",
  messagingSenderId: "842789239832",
  appId: "1:842789239832:web:acbbd73741a7a6bb9a576d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
