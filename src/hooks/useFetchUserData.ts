import { User } from 'firebase/auth';
import { doc, FirestoreError, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../firebase/firestore';
import {
  loadUserError,
  loadUserInterrupt,
  loadUserStart,
  loadUserSuccess,
  setUserRegistered,
} from '../redux/actions/userActions';
import { User as UserType } from '../redux/types/userTypes';

export default function useFetchUserData(currentUser: User | null) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserStart());
    const fetchUserData = async () => {
      try {
        if (currentUser) {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUser({ id: userSnap.id, ...userSnap.data() } as UserType);
            setIsRegistered(true);
          } else {
            setIsRegistered(false);
          }
        }
      } catch (err) {
        if (err instanceof FirestoreError) {
          dispatch(loadUserError(err.message));
        }
      }
    };
    fetchUserData();
    return () => {
      dispatch(loadUserInterrupt());
    };
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (!isRegistered) {
      dispatch(setUserRegistered(false));
    } else if (user) {
      dispatch(loadUserSuccess(user));
    } else {
      dispatch(loadUserError('User not Authenticated'));
    }
  }, [dispatch, user, isRegistered]);

  return user;
}
