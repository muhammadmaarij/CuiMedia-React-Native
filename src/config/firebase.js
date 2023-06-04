// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvkkhhaUaH4-dVRCBJKNyz_wppv6gDXFI',
  authDomain: 'cui-media.firebaseapp.com',
  projectId: 'cui-media',
  storageBucket: 'cui-media.appspot.com',
  messagingSenderId: '667837355565',
  appId: '1:667837355565:web:7a06d91c6cff0dc5a6caa4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
export {
  app,
  db,
  storage,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  ref,
  uploadBytes,
  getDownloadURL,
  orderBy,
  limit,
  updateDoc,
};
