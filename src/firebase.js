import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDN-zVuQ_QYPuIZvuSVbzpLeu3wKcDYsz8",
    authDomain: "slack-clone-75ef6.firebaseapp.com",
    projectId: "slack-clone-75ef6",
    storageBucket: "slack-clone-75ef6.appspot.com",
    messagingSenderId: "440165142044",
    appId: "1:440165142044:web:d94b3680b3a6278e5a19d9",
    measurementId: "G-G5RY982CPT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };