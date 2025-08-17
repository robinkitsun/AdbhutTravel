
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, PlusCircle, Edit, Trash2 } from 'lucide-react';

interface UpdatePost {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "adbhutadmin";

export default function AdminUpdatesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [updates, setUpdates] = useState<UpdatePost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchUpdates = async () => {
    setIsLoading(true);
    setError('');
    try {
      const updatesCollection = collection(db, 'updates');
      const q = query(updatesCollection, orderBy('createdAt', 'desc'));
      const updatesSnapshot = await getDocs(q);
      const updatesList = updatesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UpdatePost[];
      setUpdates(updatesList);
    } catch (err: any) {
      console.error("Error fetching updates:", err);
      setError(`Could not fetch updates. Please ensure Firestore is set up correctly and security rules are published. Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if(isAuthenticated) {
        fetchUpdates();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Title and content are required.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      if (editingId) {
        const postDoc = doc(db, 'updates', editingId);
        await updateDoc(postDoc, { 
          title, 
          content,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, 'updates'), {
          title,
          content,
          createdAt: serverTimestamp(),
        });
      }
      resetForm();
      await fetchUpdates();
    } catch (err: any) {
      console.error("Error submitting update:", err);
      setError(`An error occurred. Please check the console and ensure your Firestore security rules are correct. Error: ${err.message}`);
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleEdit = (post: UpdatePost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this update?')) {
      try {
        await deleteDoc(doc(db, 'updates', id));
        fetchUpdates();
      } catch (err: any) {
        console.error("Error deleting update:", err);
        setError(`Failed to delete the update. Error: ${err.message}`);
      }
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
  };
  
  if (!isAuthenticated) {
    return (
      <div className="container py-24 flex justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full"
                />
                {error && <p className="text-destructive text-sm mt-2">{error}</p>}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Admin - Manage Updates</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Update' : 'Create New Update'}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Update Title"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-1">
                Content (HTML is supported)
              </label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Update content here... You can use HTML tags like <b>, <i>, <ul>, <li>, etc."
                rows={10}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            {editingId && (
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel Edit
              </Button>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {editingId ? 'Updating...' : 'Publishing...'}
                </>
              ) : (
                <>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {editingId ? 'Update Post' : 'Publish Post'}
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Existing Updates</h2>
        {error && <p className="text-destructive p-4 bg-destructive/10 rounded-md">{error}</p>}
        {isLoading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
             <Loader2 className="h-5 w-5 animate-spin" />
             <span>Loading updates... If this continues, please check your Firestore security rules.</span>
          </div>
        ) : updates.length === 0 ? (
          <p>No updates found.</p>
        ) : (
          updates.map((post) => (
            <Card key={post.id} className="flex flex-col sm:flex-row justify-between items-start p-4">
                <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        Published on: {post.createdAt ? new Date(post.createdAt?.seconds * 1000).toLocaleDateString() : 'Date not available'}
                    </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                    </Button>
                </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
