import { signInWithPopup } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'



const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response)
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>This is the signIn page</h1>
            <button onClick={logGoogleUser}>
                Signin with google popup
            </button>
        </div>
    )
}

export default SignIn;