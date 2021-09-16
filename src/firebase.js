import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBITGBnYMBirVKGjFH37F7Qi6vHrVY04cU",
  authDomain: "clone-1d08a.firebaseapp.com",
  projectId: "clone-1d08a",
  storageBucket: "clone-1d08a.appspot.com",
  messagingSenderId: "216960427110",
  appId: "1:216960427110:web:07bdedc3e14816773779a7",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
