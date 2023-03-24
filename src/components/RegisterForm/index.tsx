import { getAuth, signOut } from 'firebase/auth';
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../firebase/firestore';
import { logoutUser } from '../../redux/actions/userActions';
import { selectAuth } from '../../redux/selectors/userSelectors';
import Button from '../Button';
import FormInput from '../FormInput';
import FormTextArea from '../FormTextArea';

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 400px;
`;

const NameUsernameContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  max-width: 300px;
  gap: 40px;
  width: 100%;
`;

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const authData = useSelector(selectAuth);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isUsernameAllowed, setIsUsernameAllowed] = useState(false);
  const email = authData?.email
  const photoURL = authData?.photoURL
  const uid = authData?.uid

  useEffect(() => {
    const q = query(collection(db, 'users'), where('username', '==', username));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsUsernameAllowed(querySnapshot.docs.length === 0);
    });
    return () => {
      setIsUsernameAllowed(false);
      unsubscribe();
    };
  }, [username]);

  const handleCancel = async (e: MouseEvent) => {
    e.preventDefault();
    await signOut(auth);
    dispatch(logoutUser());
    navigate('/home');
  };

  const handleRegister = async (e: MouseEvent) => {
    e.preventDefault();
    if(!isUsernameAllowed) throw Error("Username not available.")
    const timestamp = new Date()
    await addDoc(collection(db, 'users'), {
      banner: "",
      createdAt: timestamp.getTime(),
      description: description,
      displayName: name,
      email: email,
      liked: [],
      photoURL: photoURL,
      posts: [],
      uid: uid,
      username: username,
    })
    navigate('/home')    
  };

  return (
    <Form>
      <NameUsernameContainer>
        <FormInput
          handleChange={(e) => setUsername(e.target.value)}
          name="Username"
          placeholder="@username"
          type="text"
        />
        <FormInput
          handleChange={(e) => setName(e.target.value)}
          name="Name"
          placeholder="Name Surname"
          type="text"
        />
      </NameUsernameContainer>
      <FormInput name="Email" value={email ? email : ""} type="text" />
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
        <Button disabled={!isUsernameAllowed} onClick={(e) => handleRegister(e)}>Register</Button>
      </ButtonContainer>
    </Form>
  );
}
