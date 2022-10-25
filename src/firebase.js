import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS0rYLf8dEcaAZzKbiLj2QmVN4NlYbQPs",
  authDomain: "chatapp-32ef5.firebaseapp.com",
  projectId: "chatapp-32ef5",
  storageBucket: "chatapp-32ef5.appspot.com",
  messagingSenderId: "617672405538",
  appId: "1:617672405538:web:2096dccabde9a5bdb5107b",
  measurementId: "G-S45G83CKP4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();