// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// This is the correct way to initialize the Admin SDK.
// It automatically uses the service account credentials provided by the
// Google Cloud environment (like Firebase App Hosting).
if (admin.apps.length === 0) {
  try {
    // When deployed to a Google Cloud environment, initializeApp() with the project ID is best practice.
    // Ensure you have NEXT_PUBLIC_FIREBASE_PROJECT_ID set in your environment variables.
    admin.initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
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
