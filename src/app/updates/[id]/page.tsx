
import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import type { Metadata } from 'next';

interface UpdatePost {
    id: string;
    title: string;
    content: string;
    createdAt: Timestamp;
}

// Revalidate this page every 60 seconds
export const revalidate = 60;

async function getUpdateData(id: string): Promise<UpdatePost | null> {
  try {
    const docRef = doc(db, 'updates', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return { 
        id: docSnap.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt
      } as UpdatePost;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching document with id ${id}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const update = await getUpdateData(params.id);

  if (!update) {
    return {
      title: 'Update Not Found',
    }
  }

  return {
    title: update.title,
    description: update.content.substring(0, 150),
  }
}

export default async function UpdateDetailPage({ params }: { params: { id: string } }) {
    const update = await getUpdateData(params.id);

    if (!update) {
        notFound();
    }

    return (
        <article className="container py-12 md:py-16">
           <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{update.title}</h1>
                <p className="text-sm text-muted-foreground mb-8">
                     {update.createdAt && `Published on ${new Date(update.createdAt.seconds * 1000).toLocaleDateString()}`}
                </p>
                <div 
                    className="prose lg:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: update.content }} 
                />
           </div>
        </article>
    );
}
