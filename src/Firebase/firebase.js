import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx82B74yMmX15-FzSi44-_SJEvfiof_LE",
  authDomain: "clone-766b9.firebaseapp.com",
  projectId: "clone-766b9",
  storageBucket: "clone-766b9.appspot.com",
  messagingSenderId: "800734883300",
  appId: "1:800734883300:web:5757bdb63490b80c816bf1",
  measurementId: "G-57KJCCJBWP"

};

// initialize the firebase app
// initializing the database from firebase
// it gives us the object auth that it will be used signin and signout


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export {db, auth};
