// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ4hGq7VA2UhsCHAyLbFkODm7jzWivNzA",
  authDomain: "e-comreactvite.firebaseapp.com",
  projectId: "e-comreactvite",
  storageBucket: "e-comreactvite.appspot.com",
  messagingSenderId: "367720676358",
  appId: "1:367720676358:web:0f5c33239ab8e179ad9787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };