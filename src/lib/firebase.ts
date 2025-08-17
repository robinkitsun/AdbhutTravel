// THIS FILE IS FOR CLIENT-SIDE FIREBASE. DO NOT USE ON THE SERVER.
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

let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);

export { app, db };
