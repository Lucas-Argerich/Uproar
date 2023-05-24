import { signOut } from 'firebase/auth'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'
import { type MouseEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { db } from '../../firebase/firestore'
import { logoutUser } from '../../redux/actions/userActions'
import { selectAuth } from '../../redux/selectors/userSelectors'
import Button from '../Button'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import { auth } from '../../firebase/auth'
import { regexValidateDisplayName } from '../../utils/utils'

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 400px;
`

const NameUsernameContainer = styled.div`
  display: flex;
  gap: 40px;
`

const ButtonContainer = styled.div`
  display: flex;
  max-width: 300px;
  gap: 16px;
  width: 100%;
`

export default function RegisterForm(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authData = useSelector(selectAuth)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isUsernameAllowed, setIsUsernameAllowed] = useState(false)
  const { email, photoURL, uid } = authData ?? {}

  useEffect(() => {
    const q = query(collection(db, 'users'), where('username', '==', username))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsUsernameAllowed(querySnapshot.docs.length === 0)
    })
    return () => {
      setIsUsernameAllowed(false)
      unsubscribe()
    }
  }, [username])

  const handleCancel = (e: MouseEvent) => async (): Promise<void> => {
    e.preventDefault()
    await signOut(auth)
    dispatch(logoutUser())
    navigate('/home')
  }

  const handleRegister = (e: MouseEvent) => async (): Promise<void> => {
    e.preventDefault()
    if (!isUsernameAllowed) throw Error('Username not available.')
    if (!regexValidateDisplayName(name)) {
      throw Error(
        'Sorry, the display name you entered is invalid. Display names must be between 3 and 25 characters long and can only contain letters, numbers, underscores, hyphens, and spaces.'
      )
    }
    const timestamp = new Date()
    await addDoc(collection(db, 'users'), {
      banner: '',
      createdAt: timestamp.getTime(),
      description,
      displayName: name,
      email,
      liked: [],
      photoURL,
      posts: [],
      uid,
      username
    })
    navigate('/home')
  }

  return (
    <Form>
      <NameUsernameContainer>
        <FormInput
          handleChange={(e) => {
            setUsername(e.target.value)
          }}
          name="Username"
          placeholder="@username"
          type="text"
          error="Username not available."
          showError
        />
        <FormInput
          handleChange={(e) => {
            setName(e.target.value)
          }}
          name="Name"
          placeholder="Name Surname"
          type="text"
        />
      </NameUsernameContainer>
      <FormInput name="Email" value={email ?? ''} type="text" />
      <FormTextArea
        name="Description"
        placeholder="Tell us something about yourself!"
        onTextChange={setDescription}
        maxChars={120}
      />
      <ButtonContainer>
        <Button secondary onClick={(e) => handleCancel(e)}>
          Cancel
        </Button>
        <Button
          disabled={!isUsernameAllowed}
          onClick={(e) => handleRegister(e)}
        >
          Register
        </Button>
      </ButtonContainer>
    </Form>
  )
}
