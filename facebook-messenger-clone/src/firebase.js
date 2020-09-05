// config file
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxzEJv3tGK29z9bEgSCmoe6hDvLefXg3E",
    authDomain: "facebook-messenger-clone-5e817.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-5e817.firebaseio.com",
    projectId: "facebook-messenger-clone-5e817",
    storageBucket: "facebook-messenger-clone-5e817.appspot.com",
    messagingSenderId: "493590053696",
    appId: "1:493590053696:web:7cc5d96b8f35d0d545f0a5",
    measurementId: "G-QGNMW48EYK"
});

const db = firebaseApp.firestore();

export default db;