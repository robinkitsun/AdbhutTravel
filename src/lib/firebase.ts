
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import admin from 'firebase-admin';

// --- CLIENT-SIDE INITIALIZATION ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase for the client
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db: Firestore = getFirestore(app);

export { app, db };


// --- SERVER-SIDE (ADMIN) INITIALIZATION ---
const hasServiceAccount =
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_PRIVATE_KEY &&
    process.env.FIREBASE_CLIENT_EMAIL;

if (hasServiceAccount && !admin.apps.length) {
    try {
        const serviceAccount: admin.ServiceAccount = {
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
            privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
        };
        
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("Firebase Admin SDK initialization error:", error);
    }
} else if (!hasServiceAccount && process.env.NODE_ENV !== 'production') {
   console.warn("Firebase Admin SDK not initialized: Missing environment variables. This is expected for client-side rendering and some build environments, but might be an issue for server-side logic.");
}

// We need a lazy-loaded admin DB instance that only initializes when called.
const getAdminDb = (): admin.firestore.Firestore => {
    if (admin.apps.length === 0) {
        // This check prevents crashes in environments where admin is not initialized.
        if (hasServiceAccount) {
             admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
                }),
            });
        } else {
             // In a build environment without server secrets, we throw a clear error
             // if server-side code unexpectedly tries to access the admin DB.
             throw new Error("Firebase Admin SDK is not initialized. Check your server-side environment variables.");
        }
    }
    return admin.firestore();
}

// We export a getter function instead of the instance itself
// to ensure the initialization logic is only run when the admin DB is actually needed.
export const adminDb = getAdminDb();
