import {
  createAuthWithEmailAndPassword,
  userDocRef,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.style.scss";

import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // ----------- ONCLICK FORM HANDLE CHANGE --------

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    console.log(name, value);

    setFormFields({ ...formFields, [name]: value });
  };

  // ----------- ONCLICK FORM HANDLE SUBMIT --------------------------------

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
        alert('incorrect paswword and email')
        break;
        case 'auth/user-not-found':
        alert('User not found')
        break;
        default:
          console.log(error.message)
      }
    }
  };
  // ---------------- FORM ------------------------------

  return (
    <div className='sign-up-container'>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label={"Password"}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>
            Sign In
          </Button>
          <Button
            // className='testclass'
            onClick={signInWithGooglePopup}
            buttonType='google'
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
