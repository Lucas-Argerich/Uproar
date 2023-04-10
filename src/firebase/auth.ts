import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from './app'

export const auth = getAuth(app)

export const loginWithGoogle = async (): Promise<any> => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      return result.user
    })
    .catch((error) => {
      throw new Error(error)
    })
}
