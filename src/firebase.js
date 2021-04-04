import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDv5FKnv-Go_NJjE9fjVu_t3FCaoxkRytg",
  authDomain: "amazn-clone-37fa8.firebaseapp.com",
  projectId: "amazn-clone-37fa8",
  storageBucket: "amazn-clone-37fa8.appspot.com",
  messagingSenderId: "227668261378",
  appId: "1:227668261378:web:50d5d26c07262bd5c4051b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
