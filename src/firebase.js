
//firebase.js
import firebase from "firebase/app";
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyAbOMenabvr8E7fjrEAdbVHecuZwC4Rb2s",
    authDomain: "cocinamari-da99b.firebaseapp.com",
    databaseURL: "https://cocinamari-da99b.firebaseio.com",
    projectId: "cocinamari-da99b",
    storageBucket: "cocinamari-da99b.appspot.com",
    messagingSenderId: "15684659264",
    appId: "1:15684659264:web:c0bb7c2eff3914495d97a5",
    measurementId: "G-2ZKKQE4B8K"
};

firebase.initializeApp(config);
// ... before export default statement
export const firestore = firebase.firestore();


export default firebase;
