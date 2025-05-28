// Firebase configuration and services
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

// Firebase config - Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDBvcAEE-9SQacrlNryc1s2QWcrjAbopZQ",
  authDomain: "sanctuary-d03cd.firebaseapp.com",
  projectId: "sanctuary-d03cd",
  storageBucket: "sanctuary-d03cd.firebasestorage.app",
  messagingSenderId: "651929472943",
  appId: "1:651929472943:web:65ed1dc620f3828c2ce95a",
  measurementId: "G-J4XEHSXHQP"
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
