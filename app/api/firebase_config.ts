import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import * as FileSystem from 'expo-file-system';
import mime from 'mime';
import AsyncStorage from '@react-native-async-storage/async-storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxKKFGnFi-IBYHJ2jey2-m9akojlCv6ZE',
  authDomain: 'blaccbook-dev.firebaseapp.com',
  projectId: 'blaccbook-dev',
  storageBucket: 'blaccbook-dev.firebasestorage.app',
  messagingSenderId: '547353025123',
  appId: '1:547353025123:web:a24501d57826b653cf7656',
  measurementId: 'G-Y9L9KBCNSG',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


export const getDocument = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error('Document not found');
  return { id: docSnap.id, ...docSnap.data() };
};

export const getCollection = async (collectionName: string) => {
  const colSnap = await getDocs(collection(db, collectionName));
  return colSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addDocument = async (collectionName: string, data: any) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return { id: docRef.id };
};

export const updateDocument = async (
  collectionName: string,
  id: string,
  data: Record<string, any>
): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    await updateDoc(docRef, data);
  } else {
    await setDoc(docRef, data); // creates the doc if it doesn't exist
  }
};

export const deleteDocument = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

// --- Upload Image to Firebase Storage ---
export const uploadImageAsync = async (uri: string, path: string): Promise<string> => {
  const fileType = mime.getType(uri) || 'image/jpeg';
  const fileData = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const storageRef = ref(storage, path);
  const metadata = { contentType: fileType };
  const buffer = Buffer.from(fileData, 'base64');
  await uploadBytes(storageRef, buffer, metadata);
  return await getDownloadURL(storageRef);
};

export { storage, db, auth };
