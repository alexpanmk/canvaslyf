import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
  Firestore,
  deleteDoc,
} from "firebase/firestore";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { isNull } from "../functions/functions";

import uploadToFirebase from "./common";

//Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const exhibitionsCollection = collection(db, "exhibitions");

export const addExhibition = async (exhibition: any) => {
  try {
    const docRef = await addDoc(exhibitionsCollection, exhibition);
    return docRef.id;
  } catch (e) {
    console.error("Error adding exhibition: ", e);
    throw e;
  }
};

export const getExhibition = async (id: string) => {
  try {
    const docRef = doc(db, "exhibitions", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting exhibition: ", e);
    throw e;
  }
};

export const getAllExhibitions = async () => {
  try {
    const querySnapshot = await getDocs(exhibitionsCollection);
    const exhibitions: any[] = [];
    querySnapshot.forEach((doc) => {
      exhibitions.push({ id: doc.id, ...doc.data() });
    });
    return exhibitions;
  } catch (e) {
    console.error("Error getting exhibitions: ", e);
    throw e;
  }
};

export const updateExhibition = async (id: string, updatedExhibition: any) => {
  try {
    const docRef = doc(db, "exhibitions", id);
    await setDoc(docRef, updatedExhibition, { merge: true });
  } catch (e) {
    console.error("Error updating exhibition: ", e);
    throw e;
  }
};

export const deleteExhibition = async (id: string) => {
  try {
    const docRef = doc(db, "exhibitions", id);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Error deleting exhibition: ", e);
    throw e;
  }
};
