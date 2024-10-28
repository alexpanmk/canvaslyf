import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

// Add a new artist
export const addArtist = async (artist: any) => {
  try {
    const docRef = await addDoc(collection(db, "artists"), artist);
    return docRef.id;
  } catch (e) {
    console.error("Error adding artist: ", e);
  }
};

// Get an artist by ID
export const getArtist = async (id: string) => {
  try {
    const docRef = doc(db, "artists", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such artist!");
    }
  } catch (e) {
    console.error("Error getting artist: ", e);
  }
};

// Get all artists
export const getAllArtists = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "artists"));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error getting artists: ", e);
  }
};

// Delete an artist by ID
// export const deleteArtist = async (id: string) => {
//   try {
//     await db.collection("artists").doc(id).delete();
//   } catch (e) {
//     console.error("Error deleting artist: ", e);
//   }
// };

// Edit an artist by ID
// export const editArtist = async (id: string, updatedArtist: any) => {
//   try {
//     await db.collection("artists").doc(id).update(updatedArtist);
//   } catch (e) {
//     console.error("Error editing artist: ", e);
//   }
// };

// Add a new artwork
export const addArtwork = async (artwork: any) => {
  try {
    const docRef = await addDoc(collection(db, "artworks"), artwork);
    return docRef.id;
  } catch (e) {
    console.error("Error adding artwork: ", e);
  }
};

// Get an artwork by ID
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

// Get all artworks
export const getAllArtworks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "artworks"));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error getting artworks: ", e);
  }
};

// Delete an artwork by ID
// export const deleteArtwork = async (id: string) => {
//   try {
//     await db.collection("artworks").doc(id).delete();
//   } catch (e) {
//     console.error("Error deleting artwork: ", e);
//   }
// };

// Edit an artwork by ID
// export const editArtwork = async (id: string, updatedArtwork: any) => {
//   try {
//     await db.collection("artworks").doc(id).update(updatedArtwork);
//   } catch (e) {
//     console.error("Error editing artwork: ", e);
//   }
// };

// Add a new user
export const addUser = async (user: any) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    return docRef.id;
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};

// Get a user by ID
export const getUser = async (id: string) => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such user!");
    }
  } catch (e) {
    console.error("Error getting user: ", e);
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error getting users: ", e);
  }
};

// Edit a user by ID
// export const editUser = async (id: string, updatedUser: any) => {
//   try {
//     await db.collection("users").doc(id).update(updatedUser);
//   } catch (e) {
//     console.error("Error editing user: ", e);
//   }
// };

// Delete a user by ID
// export const deleteUser = async (id: string) => {
//   try {
//     await db.collection("users").doc(id).delete();
//   } catch (e) {
//     console.error("Error deleting user: ", e);
//   }
// };
