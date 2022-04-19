// Import the functions you need from the SDKs you need
//import {* as firebase} from "firebase/app";
//import * as firebase from "firebase/compat";
/*
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
//import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAG-HjgZy-H3tdXCNyF2MIJ4Yk-7TuxVg",
  authDomain: "fir-auth-7a211.firebaseapp.com",
  projectId: "fir-auth-7a211",
  storageBucket: "fir-auth-7a211.appspot.com",
  messagingSenderId: "208933733316",
  appId: "1:208933733316:web:43a9bbfb30090cc225da91"
};

// Initialize Firebase
/*
let app;
if (firebase.apps.length === 0){
    const app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth ()*/
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.getAuth;



export { auth };
