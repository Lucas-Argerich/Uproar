import { type ChangeEvent } from 'react'
import styled from 'styled-components'

interface IFormInput {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
  placeholder?: string
  type: string
  value?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

const Span = styled.span`
  font-size: 0.875rem;
`

const Input = styled.input`
  background-color: var(--color-primary);
  border-radius: 30px;
  border: none;
  color: var(--color-light);
  font-size: 1rem;
  outline: none;
  padding: 10px 10px 10px 20px;
  width: inherit;

  &::placeholder {
    color: var(--color-light-75);
  }

  &:disabled {
    background-color: var(--color-tertiary);
    color: var(--color-light-50);
  }
`

export default function FormInput({
  handleChange,
  name,
  placeholder,
  type,
  value
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
    </Wrapper>
  )
}
