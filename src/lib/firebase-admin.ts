// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// Check if the service account JSON is available in the environment variables
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Initialize the Firebase Admin SDK only if it hasn't been already.
if (admin.apps.length === 0) {
  try {
    // When running in a Google Cloud environment, the SDK can often find credentials automatically.
    // However, explicitly passing them is more robust, especially for local development.
    if (serviceAccount) {
        admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccount)),
        });
        console.log("Firebase Admin SDK initialized successfully using service account from environment variable.");
    } else {
        // Fallback for environments where GOOGLE_APPLICATION_CREDENTIALS is not a JSON string
        // or for Vercel/other platforms that prefer individual env vars.
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
        console.log("Firebase Admin SDK initialized successfully using individual environment variables.");
    }
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
    if (error.code === 'app/duplicate-app') {
       console.log("Admin app already initialized.");
    } else {
      // If there's a different error, we should log it.
      // This helps diagnose if the env vars are missing or malformed.
      console.error("A non-duplicate-app error occurred during Firebase Admin initialization. Please check your environment variables.", error);
    }
  }
}

let adminDb: ReturnType<typeof getFirestore>;

try {
  adminDb = getFirestore();
} catch (error: any) {
    console.error("Failed to get Firestore instance:", error.message);
    // Set to a null-like object to prevent crashes if accessed when not initialized.
    adminDb = {} as ReturnType<typeof getFirestore>;
}


export { adminDb };
