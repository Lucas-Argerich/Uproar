import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowLeft from './Icons/ArrowLeft'

interface ICancelLink {
  to: string
  children?: ReactNode
}

const StyledLink = styled(Link)`
  align-items: center;
  color: var(--color-light);
  display: flex;
  font-size: 0.875rem;
  padding: 10px;
  text-decoration: none;
  width: 100%;
`

export default function CancelLink({ to, children }: ICancelLink): JSX.Element {
  return (
    <StyledLink to={to}>
      <ArrowLeft />
      {children}
    </StyledLink>
  )
}
