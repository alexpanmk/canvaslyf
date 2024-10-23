import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  Firestore,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
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

//Get all artworks
export const getAllArtworks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "artworks"));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error getting artworks: ", e);
  }
};

// Add new artwork
export const addArtwork = (artwork: any, file: any) => {
  console.log(db);

  console.log(artwork);
  console.log(file);

  const artworkRef = collection(db, "artworks");
  const newArtworkRef = doc(artworkRef);
  console.log(newArtworkRef.id);

  const directory = `artworks/${newArtworkRef.id}/${file.name}`;
  const fileRef = ref(storage, directory);
  console.log(fileRef);
  const fileData = isNull(file) ? null : file;

  const artworkDocPromise = new Promise((resolve) =>
    resolve({ file: fileData })
  );

  let fileLink = "";

  uploadBytes(fileRef, fileData).then((snapshot) => {
    console.log("Uploaded a blob or file!");
    getDownloadURL(fileRef).then((url) => {
      console.log("File available at: ", url);
      fileLink = url;

      const artworkData = {
        ...artwork,
        file: fileLink,
      };

      addDoc(artworkRef, artworkData).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id; // Return the ID of the new artwork
      });
    });
  });

  // const uploadPromise = new Promise((resolve) => resolve({file: artwork})

  // console.log(artworkRef.id);
  // console.log(artworkRef);
  // const directory = `artworks/${userID}`,
};

//Get artwork by ID
export const getArtwork = async (id: string) => {
  try {
    const docRef = doc(db, "artworks", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such artwork!");
    }
  } catch (e) {
    console.error("Error getting artwork: ", e);
  }
};
