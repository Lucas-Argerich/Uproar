import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import CancelLink from '../../components/CancelLink';
import Logo from '../../utils/icons/Logo';
import GoogleLogo from '../../utils/icons/GoogleLogo';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../../firebase/auth';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    await loginWithGoogle()
    navigate("/home")
  }

  return (
    <Wrapper>
      <CancelLink to="/home">Cancel</CancelLink>
      <Container>
        <Logo width={350} />
        <p>Join us now and become a part of our community!</p>
      </Container>
      <ButtonContainer>
        <Button onClick={handleLogin}>
          <GoogleLogo />
          Login with Google
        </Button>
        <Button secondary onClick={() => navigate("/home")}>
          Continue without account
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
