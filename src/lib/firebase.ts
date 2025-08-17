// THIS FILE IS FOR CLIENT-SIDE FIREBASE. DO NOT USE ON THE SERVER.
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let db: Firestore;

// This function can be called on the client to get the Firestore instance.
// It ensures Firebase is initialized only once.
function getClientDb() {
    if (getApps().length === 0) {
        // Check if config keys are present.
        if (firebaseConfig.projectId && firebaseConfig.apiKey) {
            app = initializeApp(firebaseConfig);
        } else {
            console.error("Client-side Firebase configuration is missing or incomplete in .env file.");
        }
    } else {
        app = getApp();
    }

    // Get Firestore instance only if app was initialized successfully.
    if (app) {
        if (!db) { // Check if db is already initialized
           db = getFirestore(app);
        }
        return db;
    }
    // Return null or handle the uninitialized case as needed.
    return null;
}

// We export a function to get the db instance, not the instance itself.
// This ensures initialization logic runs when it's first needed.
const clientDb = getClientDb();

export { clientDb as db };
