
import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import type { Metadata } from 'next';

interface UpdatePost {
    id: string;
    title: string;
    content: string;
    created_at: string;
}

// This tells Next.js to pre-render all update pages at build time
export async function generateStaticParams() {
  try {
    const updatesCol = collection(db, 'updates');
    const snapshot = await getDocs(updatesCol);
    if (snapshot.empty) {
        return [];
    }
    return snapshot.docs.map((doc) => ({
      id: doc.id,
    }));
  } catch (error) {
    console.error("Error generating static params for Firestore updates:", error);
    return [];
  }
}

// Revalidate this page every 60 seconds
export const revalidate = 60;

async function getUpdateData(id: string): Promise<UpdatePost | null> {
  try {
    const docRef = doc(db, 'updates', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      id: docSnap.id,
      title: data.title,
      content: data.content,
      created_at: data.created_at.toDate().toISOString(),
    };
  } catch (error) {
    console.error(`Error fetching document with id ${id} from Firestore:`, error);
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
    title: `${update.title} (Firebase)`,
    description: update.content.substring(0, 150),
  }
}

export default async function UpdateDetailFirebasePage({ params }: { params: { id: string } }) {
    const update = await getUpdateData(params.id);

    if (!update) {
        notFound();
    }

    return (
        <article className="container py-12 md:py-16">
           <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{update.title}</h1>
                <p className="text-sm text-muted-foreground mb-8">
                     {update.created_at && `Published on ${new Date(update.created_at).toLocaleDateString()}`}
                </p>
                <div 
                    className="prose lg:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: update.content }} 
                />
           </div>
        </article>
    );
}
