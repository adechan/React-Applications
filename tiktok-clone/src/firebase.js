import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWlW-wzqxyWi0IRHI-t-r-LjlIkjrLTpY",
  authDomain: "tik-tok-clone-2291e.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-2291e.firebaseio.com",
  projectId: "tik-tok-clone-2291e",
  storageBucket: "tik-tok-clone-2291e.appspot.com",
  messagingSenderId: "141247291488",
  appId: "1:141247291488:web:11fcb015ce2aaac51ce305",
  measurementId: "G-XWPPDJ3HGQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
