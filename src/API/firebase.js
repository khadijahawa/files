import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlqHVtm7HAXuTYjNgjM2aQBjnW1S0MAC8",
  authDomain: "file-system-ec1ec.firebaseapp.com",
  projectId: "file-system-ec1ec",
  storageBucket: "file-system-ec1ec.appspot.com",
  messagingSenderId: "556400477756",
  appId: "1:556400477756:web:01f12b598d77788231a539",
  measurementId: "G-LQ27QVC1T2",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
