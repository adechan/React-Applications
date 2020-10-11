import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeOt_vgMGvvuMRLQel_1h8wtv7zME94HY",
  authDomain: "discord-clone-70ddd.firebaseapp.com",
  databaseURL: "https://discord-clone-70ddd.firebaseio.com",
  projectId: "discord-clone-70ddd",
  storageBucket: "discord-clone-70ddd.appspot.com",
  messagingSenderId: "4843425032",
  appId: "1:4843425032:web:474a6215543a61e66930bd",
  measurementId: "G-Y1K2BWHLRR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Google authentification
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
