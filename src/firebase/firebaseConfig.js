import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAI1HNwlKbvbA-HA8c_e6sIwmncFLqsxfI",
  authDomain: "e-commerce-project-f463b.firebaseapp.com",
  projectId: "e-commerce-project-f463b",
  storageBucket: "e-commerce-project-f463b.appspot.com",
  messagingSenderId: "387170311544",
  appId: "1:387170311544:web:665697ce86b4cdef01bc8d",
  measurementId: "G-0E2RZVZEJ0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const firestore = firebase.storage()