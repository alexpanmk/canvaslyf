// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadToFirebase = (file, fileName, path) => {
  console.log(file, fileName, path);

  // const storageRef = storage.ref();
  // return imageRef.put(file).then(() => {
  //   return imageRef.getDownloadURL();
  // });
};

export default uploadToFirebase;
