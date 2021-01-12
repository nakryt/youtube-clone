import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAeJqdRfZqHs9QO9x4Q0Piw9Eyf-NqlWtg",
  authDomain: "clone-a72b1.firebaseapp.com",
  projectId: "clone-a72b1",
  storageBucket: "clone-a72b1.appspot.com",
  messagingSenderId: "99486694367",
  appId: "1:99486694367:web:c00c090849691ad28ce26a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
