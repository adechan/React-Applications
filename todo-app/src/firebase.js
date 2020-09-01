// instal firebase npm i firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeNoCGzOFueOPyoRyPV7y0rMvYm0dXjWs",
    authDomain: "todo-app-react-adc47.firebaseapp.com",
    databaseURL: "https://todo-app-react-adc47.firebaseio.com",
    projectId: "todo-app-react-adc47",
    storageBucket: "todo-app-react-adc47.appspot.com",
    messagingSenderId: "791634057344",
    appId: "1:791634057344:web:2f83106626afce5f6c6e65",
    measurementId: "G-EYCP6FNGX5"
});

const db = firebaseApp.firestore();

export default db;
