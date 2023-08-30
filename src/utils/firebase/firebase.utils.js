import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firestore

import {
  getFirestore,
  doc, 
  getDoc, 
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOiQt1U6I8T_UO3w4gbr7UbU5x3eRp2BE",
  authDomain: "react-clothing-app1.firebaseapp.com",
  projectId: "react-clothing-app1",
  storageBucket: "react-clothing-app1.appspot.com",
  messagingSenderId: "999230469889",
  appId: "1:999230469889:web:048cfc062446e1339d0d00",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot);
  console.log(userSnapShot.exists());


  if(!userSnapShot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(error.message, "error creating user")
    }
  }

  return userDocRef

  // if user data does not exist 

  // create / set the document with the data from userAuth in my collection

  // if user data exists


}