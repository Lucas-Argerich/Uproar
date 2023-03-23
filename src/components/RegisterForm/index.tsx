import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  const auth = useSelector(selectAuth);

  const handleCancel = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleRegister = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Form>
      <NameUsernameContainer>
        <FormInput name="Username" placeholder="@username" type="text" />
        <FormInput name="Name" placeholder="user1234" type="text" />
      </NameUsernameContainer>
      <FormInput name="Email" value={auth?.email!} type="text" />
      <FormTextArea
        name="Description"
        placeholder="Tell us something about yourself!"
      />
      <ButtonContainer>
        <Button secondary onClick={(e) => handleCancel(e)}>
          Cancel
        </Button>
        <Button onClick={(e) => handleRegister(e)}>Register</Button>
      </ButtonContainer>
    </Form>
  );
}
