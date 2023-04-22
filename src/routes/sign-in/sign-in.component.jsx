import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { signInWithPopup } from "firebase/auth";
import {
    auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    useEffect (() => {
        const response = getRedirectResult(auth);
        console.log(response)
    }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response)
    createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>This is the signIn page</h1>
      <button onClick={logGoogleUser}>Signin with google popup</button>
      <button onClick={logGoogleRedirectUser}>
        Signin with google redirecet
      </button>
    </div>
  );
};

export default SignIn;
