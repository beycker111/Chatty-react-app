import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyC326eOo_Cj8pkaI4pwnWZmZyQGxZV26Ig",
    authDomain: "chatty-941ac.firebaseapp.com",
    projectId: "chatty-941ac",
    storageBucket: "chatty-941ac.appspot.com",
    messagingSenderId: "654562635570",
    appId: "1:654562635570:web:bb15990fe9fd19192cf12b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth;
export const db = firebase.database();
