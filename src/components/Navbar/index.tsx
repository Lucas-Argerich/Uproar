import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import AboutIcon from './icons/AboutIcon';
import DiscoveryIcon from './icons/DiscoveryIcon';
import HomeIcon from './icons/HomeIcon';
import NotificationIcon from './icons/NotificationIcon';

const Nav = styled.nav`
  bottom: 20px;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: 15px;
  justify-content: space-evenly;
  left: 0;
  margin-top: 50px;
  position: absolute;
  width: 100%;

  @media only screen and (min-width: 768px) {
    bottom: 0;
    flex-direction: column;
    width: auto;
    position: relative;
  }
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: var(--color-light);
  display: flex;
  gap: 10px;
  text-decoration: none;
`;

export default function Navbar() {
  const mediaQuery768 = useMediaQuery('(min-width: 768px)');
  return (
    <Nav>
      <StyledNavLink to="home">
        {({ isActive }: { isActive: boolean }) => (
          <>
            <HomeIcon isSelected={isActive} />
            {mediaQuery768 && (
              <span style={{ fontWeight: isActive ? 700 : 600 }}>Home</span>
            )}
          </>
        )}
      </StyledNavLink>
      <StyledNavLink to="discovery">
        {({ isActive }: { isActive: boolean }) => (
          <>
            <DiscoveryIcon isSelected={isActive} />
            {mediaQuery768 && (
              <span style={{ fontWeight: isActive ? 700 : 600 }}>
                Discovery
              </span>
            )}{' '}
          </>
        )}
      </StyledNavLink>
      <StyledNavLink to="notifications">
        {({ isActive }: { isActive: boolean }) => (
          <>
            <NotificationIcon isSelected={isActive} />
            {mediaQuery768 && (
              <span style={{ fontWeight: isActive ? 700 : 600 }}>
                Notifications
              </span>
            )}
          </>
        )}
      </StyledNavLink>
      <StyledNavLink to="about">
        {({ isActive }: { isActive: boolean }) => (
          <>
            <AboutIcon isSelected={isActive} />
            {mediaQuery768 && (
              <span style={{ fontWeight: isActive ? 700 : 600 }}>About</span>
            )}{' '}
          </>
        )}
      </StyledNavLink>
    </Nav>
  );
}
