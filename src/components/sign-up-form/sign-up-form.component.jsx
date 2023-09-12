
import { createAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',

}


const SignUpForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields)

   

    const handleChange = (e) => { 
        const { name, value } = e.target;

        console.log(name, value)

        setFormFields({...formFields, [name]: value})

    }

     const handleSubmit = async e => {
       e.preventDefault();

       if (password != confirmPassword) {
         alert("passwords do not match");
         return;
       }

       try {
        console.log(email, password)
         const response = createAuthWithEmailAndPassword(email, password);
         console.log(response);
       } catch (error) {
         console.log("user creation encountered an error", error);
       }
     };


    return (
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value = {displayName}
          />

          <label>Email</label>
          <input
            type='email'
            required
            onChange={handleChange}
            name='email'
          />

          <label>Password</label>
          <input
            type='password'
            required
            onChange={handleChange}
            name='password'
          />

          <label>Confirm Password</label>
          <input
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
          />

          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
}

export default SignUpForm;
