import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useDispatch } from 'react-redux';
import { loadUserInterrupt, setAuth } from '../redux/actions/userActions';

export default function useAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, providerId, uid } =
          user;
        const userInfo = {
          displayName,
          email,
          phoneNumber,
          photoURL,
          providerId,
          uid,
        };
        dispatch(setAuth(userInfo));
      } else {
        dispatch(loadUserInterrupt());
      }
    });
    return unsubscribe;
  }, [dispatch]);
}
