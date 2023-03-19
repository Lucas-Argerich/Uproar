import { doc, FirestoreError, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase/firestore';
import {
  loadUserError,
  loadUserInterrupt,
  loadUserStart,
  loadUserSuccess,
} from '../redux/actions/userActions';
import { selectAuth } from '../redux/selectors/userSelectors';
import { User as UserType } from '../redux/types/userTypes';
import useAuth from './useAuth';

export default function useHandleUserState() {
  const dispatch = useDispatch();
  useAuth();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    dispatch(loadUserStart());
    const fetchUserData = async () => {
      try {
        if (auth) {
          const userRef = doc(db, 'users', auth.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            dispatch(
              loadUserSuccess({
                id: userSnap.id,
                ...userSnap.data(),
              } as UserType)
            );
          } else {
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
  }, [auth, dispatch]);
}
