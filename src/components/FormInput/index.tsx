import { type ChangeEvent } from 'react'
import styled from 'styled-components'

interface IFormInput {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
  placeholder?: string
  type: string
  value?: string
  error?: string
  showError?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  width: 100%;
`

const Span = styled.span`
  font-size: 0.875rem;
  padding-left: 12px;
`

const Input = styled.input`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  border: 2px solid var(--color-primary);
  color: var(--color-light);
  font-size: 1rem;
  margin-bottom: 24px;
  outline: none;
  padding: 10px;
  width: inherit;

  &::placeholder {
    color: var(--color-light-75);
  }

  &:disabled {
    background-color: var(--color-primary);
    color: var(--color-light-50);
  }
`

const Error = styled.span`
  bottom: 0;
  color: var(--color-red);
  font-size: 0.75rem;
  position: absolute;
`

export default function FormInput({
  handleChange,
  name,
  placeholder,
  type,
  value,
  error,
  showError
}: IFormInput): JSX.Element {
  return (
    <Wrapper>
      <Span>{name}</Span>
      <Input
        onChange={handleChange}
        disabled={Boolean(value)}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {showError === true && <Error>{error}</Error>}
    </Wrapper>
  )
}
