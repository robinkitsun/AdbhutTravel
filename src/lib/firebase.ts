// THIS FILE IS FOR CLIENT-SIDE FIREBASE. DO NOT USE ON THE SERVER.
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// The config is sourced from environment variables for security and flexibility.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let db: ReturnType<typeof getFirestore>;

// Check if all necessary environment variables are set.
const isConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;

if (isConfigured) {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }
    db = getFirestore(app);
} else {
    console.warn("Client-side Firebase config is missing. Firestore will not be available on the client.");
    // Set db to a null-like object to avoid runtime errors if accessed.
    db = {} as ReturnType<typeof getFirestore>;
}


export { app, db };
