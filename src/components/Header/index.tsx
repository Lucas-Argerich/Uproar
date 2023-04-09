import Logo from '../../utils/icons/Logo'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: var(--color-quaternary);
    height: 72px;
    display: flex;
    padding: 0 50px;
    align-items: center;
`

export default function Header () {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}
