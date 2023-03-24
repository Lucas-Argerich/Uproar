import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

interface IFormTextArea {
  maxChars?: number;
  name: string;
  onTextChange: (str: string) => void;
  placeholder?: string;
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

const TextArea = styled.textarea`
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
`;

const CharsLeft = styled.span`
    font-size: 0.75rem;
    margin-left: auto;
`

export default function FormTextArea({
  maxChars,
  name,
  onTextChange,
  placeholder,
}: IFormTextArea) {
  const [text, setText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const _handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <Wrapper>
      <Span>{name}</Span>
      <TextArea
        maxLength={maxChars}
        onChange={_handleChange}
        onInput={handleInput}
        placeholder={placeholder}
        ref={textAreaRef}
      ></TextArea>
      {maxChars && <CharsLeft>{maxChars - text.length} characters left.</CharsLeft>}
    </Wrapper>
  );
}
