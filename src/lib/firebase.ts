// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// This is a public configuration and is safe to expose to the client.
// Firebase security rules will protect your data.
const firebaseConfig = {
  apiKey: "AIzaSyDP2v8fC5pT8SK8f-Z8qJ4J8y-4oXvYq7Y",
  authDomain: "adbhut-explorer-f8c27.firebaseapp.com",
  projectId: "adbhut-explorer-f8c27",
  storageBucket: "adbhut-explorer-f8c27.appspot.com",
  messagingSenderId: "565868285374",
  appId: "1:565868285374:web:f5c3a37398b672f7e72a44",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
