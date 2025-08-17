
'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

// Define the shape of a post, ensuring serializable types for the client
export interface UpdatePost {
  id: string;
  title: string;
  content: string;
  created_at: string; // Supabase returns ISO string
  updated_at?: string;
}

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required.'),
  content: z.string().min(1, 'Content is required.'),
});

// This function now runs on the server and uses the Supabase client
export async function getUpdates(): Promise<ActionResult<UpdatePost[]>> {
  const { data, error } = await supabase
    .from('updates')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Supabase - Error fetching updates:", error);
    return { success: false, error: "Could not fetch updates from Supabase." };
  }

  return { success: true, data: data as UpdatePost[] };
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

    const { data, error } = await supabase
        .from('updates')
        .insert([{ title, content }])
        .select('id')
        .single();

    if (error) {
        console.error("Supabase - Error creating update:", error);
        return { success: false, error: `Failed to create update: ${error.message}` };
    }
    
    revalidatePath('/updates'); // Revalidate public page
    revalidatePath('/admin/updates'); // Revalidate admin page
    return { success: true, data: { id: data.id } };
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

    const { error } = await supabase
        .from('updates')
        .update({ title, content, updated_at: new Date().toISOString() })
        .eq('id', id);

    if (error) {
        console.error("Supabase - Error updating update:", error);
        return { success: false, error: `Failed to update post: ${error.message}` };
    }

    revalidatePath('/updates');
    revalidatePath(`/updates/${id}`);
    revalidatePath('/admin/updates');
    return { success: true, data: null };
}

export async function deleteUpdate(id: string): Promise<ActionResult<null>> {
    if (!id) {
        return { success: false, error: 'Document ID is required for deletion.' };
    }
    
    const { error } = await supabase
        .from('updates')
        .delete()
        .eq('id', id);

    if (error) {
        console.error("Supabase - Error deleting update:", error);
        return { success: false, error: `Failed to delete update: ${error.message}` };
    }

    revalidatePath('/updates');
    revalidatePath('/admin/updates');
    return { success: true, data: null };
}
