
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { adminDb } from '@/lib/firebase';
import type { UpdatePost } from './page';

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required.'),
  content: z.string().min(1, 'Content is required.'),
});

// This function runs on the server and uses the Firebase Admin SDK
export async function getUpdates(): Promise<ActionResult<UpdatePost[]>> {
  try {
    const updatesRef = adminDb.collection('updates');
    const snapshot = await updatesRef.orderBy('created_at', 'desc').get();
    
    if (snapshot.empty) {
      return { success: true, data: [] };
    }

    const updates = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        created_at: data.created_at.toDate().toISOString(),
        updated_at: data.updated_at?.toDate().toISOString(),
      };
    });

    return { success: true, data };
  } catch (e: any) {
    console.error("Firestore Admin - Unexpected error fetching updates:", e);
    return { success: false, error: `An unexpected error occurred: ${e.message}` };
  }
}

export async function createUpdate(formData: FormData): Promise<ActionResult<{ id: string }>> {
    const validatedFields = formSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
    });

    if (!validatedFields.success) {
        return { success: false, error: validatedFields.error.flatten().fieldErrors.toString() };
    }
    
    const { title, content } = validatedFields.data;

    try {
        const newUpdate = {
            title,
            content,
            created_at: new Date(),
            updated_at: new Date(),
        };
        const docRef = await adminDb.collection('updates').add(newUpdate);

        revalidatePath('/updates-firebase');
        revalidatePath('/admin/updates-firebase');
        return { success: true, data: { id: docRef.id } };
    } catch (e: any) {
        console.error("Firestore Admin - Unexpected error creating update:", e);
        return { success: false, error: `An unexpected error occurred: ${e.message}` };
    }
}

export async function updateUpdate(formData: FormData): Promise<ActionResult<null>> {
    const validatedFields = formSchema.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        content: formData.get('content'),
    });

    if (!validatedFields.success) {
        return { success: false, error: validatedFields.error.flatten().fieldErrors.toString() };
    }

    const { id, title, content } = validatedFields.data;
    
    if (!id) {
        return { success: false, error: 'ID is required for update.' };
    }

    try {
        const updateRef = adminDb.collection('updates').doc(id);
        await updateRef.update({
            title,
            content,
            updated_at: new Date(),
        });
        
        revalidatePath('/updates-firebase');
        revalidatePath(`/updates-firebase/${id}`);
        revalidatePath('/admin/updates-firebase');
        return { success: true, data: null };
    } catch (e: any) {
        console.error("Firestore Admin - Unexpected error updating update:", e);
        return { success: false, error: `An unexpected error occurred: ${e.message}` };
    }
}

export async function deleteUpdate(id: string): Promise<ActionResult<null>> {
    if (!id) {
        return { success: false, error: 'Document ID is required for deletion.' };
    }
    
    try {
        await adminDb.collection('updates').doc(id).delete();
        
        revalidatePath('/updates-firebase');
        revalidatePath('/admin/updates-firebase');
        return { success: true, data: null };
    } catch (e: any) {
        console.error("Firestore Admin - Unexpected error deleting update:", e);
        return { success: false, error: `An unexpected error occurred: ${e.message}` };
    }
}
