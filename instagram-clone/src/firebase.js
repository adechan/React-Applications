import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABhKGwmmMKcbdItes4H2-HCMZ8NFi0kho",
    authDomain: "instagram-clone-dbf65.firebaseapp.com",
    databaseURL: "https://instagram-clone-dbf65.firebaseio.com",
    projectId: "instagram-clone-dbf65",
    storageBucket: "instagram-clone-dbf65.appspot.com",
    messagingSenderId: "191264167774",
    appId: "1:191264167774:web:ddb7296002904a8d72a1cf",
    measurementId: "G-Z89WJ23N0S"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();   // for login, logout
const storage = firebase.storage();     // to upload pictures

export { db, auth, storage };