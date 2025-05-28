// Firebase configuration and services
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

// Firebase config - Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection reference
const poetryCollection = collection(db, 'poems');

// Service functions
export const addPoetry = async (poetryData) => {
  try {
    const docRef = await addDoc(poetryCollection, {
      ...poetryData,
      createdAt: serverTimestamp(),
      timestamp: Date.now() // Untuk fallback sorting
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding poetry:', error);
    return { success: false, error: error.message };
  }
};

export const getAllPoetry = async () => {
  try {
    const q = query(poetryCollection, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const poems = [];
    
    querySnapshot.forEach((doc) => {
      poems.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, poems };
  } catch (error) {
    console.error('Error getting poetry:', error);
    return { success: false, error: error.message, poems: [] };
  }
};

export { db };
