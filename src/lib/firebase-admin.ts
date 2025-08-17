// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// This is the correct way to initialize the Admin SDK.
// It automatically uses the service account credentials provided by the
// Google Cloud environment (like Firebase App Hosting).
// This avoids hardcoding sensitive keys and incorrect project IDs.
if (admin.apps.length === 0) {
  try {
    admin.initializeApp();
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
