import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import Button from '../../components/Button';
import { auth } from '../../firebase/auth';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
`;

export default function Register() {
  console.log(auth)
  return (
    <Wrapper>
      <Button onClick={() => signOut(auth).then((i)=>console.log(i))}>Logout</Button>
    </Wrapper>
  )
}
