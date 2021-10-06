import * as firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMxn4FCgIDG684hAN1ibx6cuCUsO7tDts",
  authDomain: "react-ecommerce-carnetbooks.firebaseapp.com",
  projectId: "react-ecommerce-carnetbooks",
  storageBucket: "react-ecommerce-carnetbooks.appspot.com",
  messagingSenderId: "55883048933",
  appId: "1:55883048933:web:33fe59ac4d2659c6f8710c",
};

const app= firebase.initializedApp(firebaseConfig);
export const getFirebase=()=> app;

//Servicios
export const getFirestore =()=> firebase.firestore(app);