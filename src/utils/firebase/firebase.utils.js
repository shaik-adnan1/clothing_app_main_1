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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Implementing Firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)
  
  const userSnapshot = await getDoc(userDocRef)
  
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

}

