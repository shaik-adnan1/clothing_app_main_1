import { signInWithPopup } from 'firebase/auth';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
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