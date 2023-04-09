import {
  collection,
  FirestoreError,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase/firestore'
import {
  loadUserError,
  loadUserInterrupt,
  loadUserStart,
  loadUserSuccess
} from '../redux/actions/userActions'
import { selectAuth } from '../redux/selectors/userSelectors'
import { type UserData } from '../redux/types/userTypes'
import useAuth from './useAuth'

export default function useHandleUserState () {
  const dispatch = useDispatch()
  useAuth()
  const auth = useSelector(selectAuth)

  useEffect(() => {
    if (auth == null) return
    dispatch(loadUserStart())
    const q = query(collection(db, 'users'), where('uid', '==', auth ? auth.uid : ''))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      try {
        if (!querySnapshot.empty) {
          dispatch(
            loadUserSuccess({
              data: querySnapshot.docs[0].data() as UserData,
              id: querySnapshot.docs[0].id
            })
          )
        } else {
          dispatch(loadUserError('No user in database'))
        }
      } catch (err) {
        if (err instanceof FirestoreError) {
          dispatch(loadUserError(err.message))
        }
      }
    })

    return () => {
      dispatch(loadUserInterrupt())
      unsubscribe()
    }
  }, [auth, dispatch])
}
