import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AboutIcon from './icons/AboutIcon';
import DiscoveryIcon from './icons/DiscoveryIcon';
import HomeIcon from './icons/HomeIcon';
import NotificationIcon from './icons/NotificationIcon';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 15px;
  margin-top: 50px;
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: var(--color-light);
  display: flex;
  gap: 10px;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <Nav>
      <StyledNavLink
        to="home"
      >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <HomeIcon isSelected={isActive} />
            <span style={{ fontWeight: isActive ? 700 : 600 }}>
                Home
            </span>
          </>
        )}
      </StyledNavLink>
      <StyledNavLink
        to="discovery"
      >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <DiscoveryIcon isSelected={isActive} />
            <span style={{ fontWeight: isActive ? 700 : 600 }}>
                Discovery
            </span>
          </>
        )}
      </StyledNavLink>
      <StyledNavLink
        to="notifications"
      >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <NotificationIcon isSelected={isActive} />
            <span style={{ fontWeight: isActive ? 700 : 600 }}>
                Notifications
            </span>
          </>
        )}
      </StyledNavLink>
      <StyledNavLink
        to="about"
      >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <AboutIcon isSelected={isActive} />
            <span style={{ fontWeight: isActive ? 700 : 600 }}>
                About
            </span>
          </>
        )}
      </StyledNavLink>
    </Nav>
  );
}
