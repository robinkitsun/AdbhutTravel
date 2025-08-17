// src/lib/firebase-admin.ts
import "dotenv/config"; // Load environment variables
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// This is the correct way to initialize the Admin SDK.
// It automatically uses the service account credentials provided by the
// Google Cloud environment (like Firebase App Hosting) or from the .env.local file.
if (admin.apps.length === 0) {
  try {
    // When deployed to a Google Cloud environment, initializeApp() without arguments is best practice.
    // Locally, it will use the GOOGLE_APPLICATION_CREDENTIALS from your .env.local file.
    // If you have FIREBASE_CONFIG, it might use that. Let's simplify and rely on the standard env vars.
    admin.initializeApp({
       credential: admin.credential.applicationDefault(),
       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
    if (error.code === 'app/duplicate-app') {
       // This can happen with hot-reloading in dev. It's not a fatal error.
       console.log("Admin app already initialized.");
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
