import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZAa_hQoMRCZmlYe3k8o4Cj6sQbpETrM",
  authDomain: "tinder-clone-63256.firebaseapp.com",
  databaseURL: "https://tinder-clone-63256.firebaseio.com",
  projectId: "tinder-clone-63256",
  storageBucket: "tinder-clone-63256.appspot.com",
  messagingSenderId: "980381725194",
  appId: "1:980381725194:web:5621d062c5d7fd6a5865f3",
  measurementId: "G-39CBSQMHCM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
