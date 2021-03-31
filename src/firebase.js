import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDJY26ez_JrePkMIunOyO0fB3tJZNEofmU",
  authDomain: "react-ds-auth.firebaseapp.com",
  projectId: "react-ds-auth",
  storageBucket: "react-ds-auth.appspot.com",
  messagingSenderId: "1028859621604",
  appId: "1:1028859621604:web:9b2bd3b7d34042df267cf1",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
