import { KeyboardEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface IFormTextArea {
  name: string;
  placeholder?: string;
  maxChar?: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const Span = styled.span`
  font-size: 0.875rem;
`;

const TextArea = styled.p`
  background-color: var(--color-primary);
  border-radius: 20px;
  border: none;
  color: var(--color-light);
  outline: none;
  width: 100%;
  padding: 10px 10px 10px 20px;
  resize: none;
  min-height: 60px;

  &::placeholder {
    color: var(--color-light-75);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export default function FormTextArea({name, placeholder}: IFormTextArea) {
  const [value, setValue] = useState("")

  const handleChange = (e:KeyboardEvent) => {
    console.log(e.currentTarget.innerHTML)
    setValue(e.currentTarget.innerHTML)
  }

  return (
    <Wrapper>
      <Span>{name}</Span>
      <TextArea contentEditable placeholder={placeholder} onKeyDown={e => handleChange(e)}></TextArea>
    </Wrapper>
  )
}
