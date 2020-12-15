import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDGf0BWxrKtbQ1irFjFY-BS0h78lPKopUs",
    authDomain: "react-firebase-88725.firebaseapp.com",
    databaseURL: "https://react-firebase-88725.firebaseio.com",
    projectId: "react-firebase-88725",
    storageBucket: "react-firebase-88725.appspot.com",
    messagingSenderId: "634669857757",
    appId: "1:634669857757:web:e8e6d04f59575bcd309434"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;