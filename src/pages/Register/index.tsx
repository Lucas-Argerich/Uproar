import styled from 'styled-components';
import RegisterForm from '../../components/RegisterForm';
import Logo from '../../utils/icons/Logo';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 525px;
  margin: auto;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
`;

const P = styled.p`
  text-align: center;
`;

export default function Register() {
  return (
    <Wrapper>
      <Container>
        <Logo width={300} />
        <P>Welcome to our community! We're excited to have you on board!</P>
      </Container>
      <RegisterForm />
      <P>
        Please fill out the registration form to complete your account setup and
        start enjoying all the features and benefits our platform has to offer.
      </P>
    </Wrapper>
  );
}
