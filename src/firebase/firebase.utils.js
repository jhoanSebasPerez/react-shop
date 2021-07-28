import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkdXEqSy6rrD0A50Pet-EkXMbF6IdU32o",
  authDomain: "react-shop-db-f4f0b.firebaseapp.com",
  projectId: "react-shop-db-f4f0b",
  storageBucket: "react-shop-db-f4f0b.appspot.com",
  messagingSenderId: "908338582358",
  appId: "1:908338582358:web:0b0d18cc76826b32c4bcf7",
  measurementId: "G-1BWMPJRWEE",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
