
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

let app: FirebaseApp | undefined;
let db: Firestore | null = null;

// This function can be called on the client to get the Firestore instance.
// It ensures Firebase is initialized only once.
function getClientDb() {
    if (!getApps().length) {
        // Check if config keys are present.
        if (firebaseConfig.projectId && firebaseConfig.apiKey) {
            try {
                app = initializeApp(firebaseConfig);
            } catch (e) {
                console.error("Error initializing Firebase on the client:", e);
                return null;
            }
        } else {
            console.error("Client-side Firebase configuration is missing or incomplete in .env file.");
            return null;
        }
    } else {
        app = getApp();
    }

    // Get Firestore instance only if app was initialized successfully.
    if (app) {
        // We check if db is already initialized to avoid re-creating it.
        if (!db) {
           try {
               db = getFirestore(app);
           } catch (e) {
               console.error("Error getting Firestore instance on the client:", e);
               return null;
           }
        }
        return db;
    }
    
    // Return null if Firebase app could not be initialized.
    return null;
}

// We export the initialized db instance directly.
const clientDb = getClientDb();

export { clientDb as db };
