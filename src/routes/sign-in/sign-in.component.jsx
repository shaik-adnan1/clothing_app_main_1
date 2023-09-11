import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,

} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    } 
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   console.log(user);
  // };

  return (
    <div>
      <h1>This is the signIn page</h1>
      <button onClick={logGoogleUser}>Signin with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Signin with google redirect
      </button>
      <SignUpForm />
      {/* <button onClick={logGoogleRedirectUser}>
        Signin with google redirecet
      </button> */}
    </div>
  );
};

export default SignIn;
