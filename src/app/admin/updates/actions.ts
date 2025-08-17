
'use server';

import { revalidatePath } from 'next/cache';
import { adminDb } from '@/lib/firebase-admin';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';

// Define the shape of a post, ensuring serializable types for the client
export interface UpdatePost {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

// This function now runs on the server and uses the admin SDK
export async function getUpdates(): Promise<ActionResult<UpdatePost[]>> {
  try {
    const updatesCollection = collection(adminDb, 'updates');
    const q = query(updatesCollection, orderBy('createdAt', 'desc'));
    const updatesSnapshot = await getDocs(q);
    const updatesList = updatesSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            content: data.content,
            // Timestamps are fine to pass to the client if they are not rendered directly
            createdAt: data.createdAt, 
            updatedAt: data.updatedAt,
        } as UpdatePost
    });
    return { success: true, data: updatesList };
  } catch (err: any) {
    console.error("Server Action - Error fetching updates:", err);
    return { success: false, error: "Could not fetch updates from the server." };
  }
}

export async function createUpdate(formData: FormData): Promise<ActionResult<{ id: string }>> {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!title || !content) {
        return { success: false, error: 'Title and content are required.' };
    }

    try {
        const docRef = await addDoc(collection(adminDb, 'updates'), {
            title,
            content,
            createdAt: serverTimestamp(),
        });
        revalidatePath('/updates'); // Revalidate public page
        revalidatePath('/admin/updates'); // Revalidate admin page
        return { success: true, data: { id: docRef.id } };
    } catch (err: any) {
        console.error("Server Action - Error creating update:", err);
        return { success: false, error: `Failed to create update: ${err.message}` };
    }
}

export async function updateUpdate(formData: FormData): Promise<ActionResult<null>> {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!id || !title || !content) {
        return { success: false, error: 'ID, title, and content are required.' };
    }

    try {
        const postDoc = doc(adminDb, 'updates', id);
        await updateDoc(postDoc, { 
            title, 
            content,
            updatedAt: serverTimestamp(),
        });
        revalidatePath('/updates');
        revalidatePath(`/updates/${id}`);
        revalidatePath('/admin/updates');
        return { success: true, data: null };
    } catch (err: any) {
        console.error("Server Action - Error updating update:", err);
        return { success: false, error: `Failed to update post: ${err.message}` };
    }
}

export async function deleteUpdate(id: string): Promise<ActionResult<null>> {
    if (!id) {
        return { success: false, error: 'Document ID is required for deletion.' };
    }
    
    try {
        await deleteDoc(doc(adminDb, 'updates', id));
        revalidatePath('/updates');
        revalidatePath('/admin/updates');
        return { success: true, data: null };
    } catch (err: any) {
        console.error("Server Action - Error deleting update:", err);
        return { success: false, error: `Failed to delete update: ${err.message}` };
    }
}
