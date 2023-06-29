import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'netelegram-d1c6b.firebaseapp.com',
  projectId: 'netelegram-d1c6b',
  storageBucket: 'netelegram-d1c6b.appspot.com',
  messagingSenderId: '706582035266',
  appId: '1:706582035266:web:f4c257950b21dd13efa6db',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
