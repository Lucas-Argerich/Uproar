import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  children: ReactNode | string;
  onClick: () => void;
  secondary?: boolean;
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
            background-color: var(--color-tertiary);
            border-radius: 30px;
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
          }
        `}
`;

export default function Button({ children, onClick, secondary }: IButton) {
  return (
    <StyledButton secondary={secondary} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
