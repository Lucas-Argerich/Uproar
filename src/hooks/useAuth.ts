import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/auth'
import { useDispatch } from 'react-redux'
import {
  loadUserInterrupt,
  loadUserStart,
  setAuth
} from '../redux/actions/userActions'

export default function useAuth(): void {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUserStart())
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        const { displayName, email, phoneNumber, photoURL, providerId, uid } =
          user
        const userInfo = {
          displayName,
          email,
          phoneNumber,
          photoURL,
          providerId,
          uid
        }
        dispatch(setAuth(userInfo))
      } else {
        dispatch(loadUserInterrupt())
      }
    })
    return unsubscribe
  }, [dispatch])
}
