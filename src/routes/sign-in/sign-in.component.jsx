import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(user)
  }

  return (
    <div>
      <h1>This is the signIn page</h1>
      <button onClick={logGoogleUser}>Signin with google popup</button>
      {/* <button onClick={logGoogleRedirectUser}>
        Signin with google redirecet
      </button> */}
    </div>
  );
};

export default SignIn;
