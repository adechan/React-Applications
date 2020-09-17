import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAecq_yi1XOl9tYhclYR2sWovaAuX-mcRY",
  authDomain: "clone-c15cd.firebaseapp.com",
  databaseURL: "https://clone-c15cd.firebaseio.com",
  projectId: "clone-c15cd",
  storageBucket: "clone-c15cd.appspot.com",
  messagingSenderId: "62172374309",
  appId: "1:62172374309:web:d40bb5961e4123993f66cc",
  measurementId: "G-Z474JMKZS8",
});

const auth = firebase.auth();

export { auth };
