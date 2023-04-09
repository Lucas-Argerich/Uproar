import { type ReactNode, type MouseEvent } from 'react'
import styled, { css } from 'styled-components'

interface IButton {
  children: ReactNode | string
  disabled?: boolean
  onClick: (e: MouseEvent) => void
  secondary?: boolean
};

const StyledButton = styled.button<{ secondary?: boolean }>`
  align-items: center;
  border: none;
  color: var(--color-light);
  cursor: pointer;
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  width: 100%;
  
  ${({ secondary }) =>
    !secondary
    ? css`
           {
            background-color: var(--color-primary);
            border-radius: 5px;
            font-size: 0.875rem;
            font-weight: 400;
            padding: 10px 20px;
          }
        `
      : css`
           {
            background-color: transparent;
            font-size: 0.75rem;
            font-weight: 300;
            text-decoration: underline;
          }
        `}
`

export default function Button ({ children, disabled, onClick, secondary }: IButton) {
  return (
    <StyledButton disabled={disabled} secondary={secondary} onClick={(e) => { onClick(e) }}>
      {children}
    </StyledButton>
  )
}
