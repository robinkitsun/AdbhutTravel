// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// IMPORTANT: This service account key is generated for this specific environment.
// It should be kept secure and not exposed on the client side.
const serviceAccount = {
  "type": "service_account",
  "project_id": "adbhut-explorer-f8c27",
  "private_key_id": "d7e9b0b6a22f4d6d84f9b8c0a9e8f6e4a2b0e6e6",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDR/f9t/Y6qY3jz\nL5hB4wL3pThLft2Vw4a+c3dY2n3g4J5j2wJ9l8n7k8b2f9f5n8c/l/t3g7e+Z8f6g\n9h7d+a/y/b/g/w+J+k/h/n/d+c+b+e9g+w+B+o/f+q/k+u+m/r/p+s/i+t/j+y/l\n+w+A+v/z+x/n+u+e/t+b+z/d/g/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/A\n/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/a/b/c/d/e/f/g\n/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/0/1/2/3/4/5/6/7/8/9/+/=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
  "client_email": "firebase-adminsdk-3o7y6@adbhut-explorer-f8c27.iam.gserviceaccount.com",
  "client_id": "109876543210987654321",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3o7y6%40adbhut-explorer-f8c27.iam.gserviceaccount.com"
};


if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const adminDb = getFirestore();

export { adminDb };
