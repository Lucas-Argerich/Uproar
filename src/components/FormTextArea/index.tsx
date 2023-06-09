import { type ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'

interface IFormTextArea {
  maxChars?: number
  name: string
  onTextChange: (str: string) => void
  placeholder?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

const Span = styled.span`
  font-size: 0.875rem;
  padding-left: 12px;
`

const TextArea = styled.textarea`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  border: 2px solid var(--color-primary);
  color: var(--color-light);
  outline: none;
  width: 100%;
  padding: 10px;
  resize: none;
  min-height: 60px;

  &::placeholder {
    color: var(--color-light-75);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const CharsLeft = styled.span`
  font-size: 0.75rem;
  margin-left: auto;
`

export default function FormTextArea({
  maxChars,
  name,
  onTextChange,
  placeholder
}: IFormTextArea): JSX.Element {
  const [text, setText] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (): void => {
    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  const _handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value)
    onTextChange(e.target.value)
  }

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
      {maxChars !== undefined && (
        <CharsLeft>{maxChars - text.length} characters left.</CharsLeft>
      )}
    </Wrapper>
  )
}
