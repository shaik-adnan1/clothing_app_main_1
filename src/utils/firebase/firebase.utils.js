import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOiQt1U6I8T_UO3w4gbr7UbU5x3eRp2BE",
  authDomain: "react-clothing-app1.firebaseapp.com",
  projectId: "react-clothing-app1",
  storageBucket: "react-clothing-app1.appspot.com",
  messagingSenderId: "999230469889",
  appId: "1:999230469889:web:048cfc062446e1339d0d00",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Implementing Authentication

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Implementing Firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    // create / set the document with the data from userAuth in user collection

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  // if user data exists
  // return userDecRef
  return userDocRef;
};
