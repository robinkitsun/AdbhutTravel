
"use client";
// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP2v8fC5pT8SK8f-Z8qJ4J8y-4oXvYq7Y",
  authDomain: "adbhut-explorer-f8c27.firebaseapp.com",
  projectId: "adbhut-explorer-f8c27",
  storageBucket: "adbhut-explorer-f8c27.appspot.com",
  messagingSenderId: "565868285374",
  appId: "1:565868285374:web:f5c3a37398b672f7e72a44",
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

db = getFirestore(app);

export { app, db };
