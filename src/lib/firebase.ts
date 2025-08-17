
// THIS FILE IS FOR CLIENT-SIDE FIREBASE. DO NOT USE ON THE SERVER.
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// This configuration is now correctly read from environment variables.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// NOTE: This file is no longer used for database operations on the admin page,
// as they have been moved to Server Actions. It is kept for any potential
// future client-side needs but is not actively used for writing data.
let app: FirebaseApp | undefined;
let db: Firestore | null = null;


function getClientDb() {
    if (!getApps().length) {
        // Ensure the necessary client-side config values are present.
        // The API key is often the most critical one for client-side initialization.
        if (firebaseConfig.projectId) {
            try {
                app = initializeApp(firebaseConfig);
            } catch (e) {
                console.error("Error initializing Firebase on the client:", e);
                return null;
            }
        } else {
            // This is not a fatal error if the client doesn't need Firebase directly.
            console.warn("Client-side Firebase configuration is missing or incomplete in .env file.");
            return null;
        }
    } else {
        app = getApp();
    }

    if (app && !db) {
       try {
           db = getFirestore(app);
       } catch (e) {
           console.error("Error getting Firestore instance on the client:", e);
           return null;
       }
    }
    return db;
}

const clientDb = getClientDb();

export { clientDb as db };
