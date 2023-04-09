import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../../firebase/auth'
import { logoutUser } from '../../redux/actions/userActions'
import { selectCurrentUser } from '../../redux/selectors/userSelectors'

const Container = styled.div`
  align-items: flex-end;
  background-color: var(--color-quaternary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  padding: 20px 40px;
  max-width: 260px;
`

const ProfileNameWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`

const Picture = styled.div`
  background-color: var(--color-primary);
  border-radius: 55px;
  height: 100px;
  width: 100px;
  background-position: center center;
`

const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const Username = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: var(--color-light);
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-light);
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  outline: none;
  padding: 0;
`

export default function ProfileCard () {
  const userData = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  const handleClick = () => {
    signOut(auth)
    dispatch(logoutUser())
  }

  return (
    <Container>
      <ProfileNameWrapper>
        <Picture
          style={
            userData?.data.photoURL
              ? { backgroundImage: `url(${userData?.data.photoURL})` }
              : {}
          }
        />
        <Name>{(userData != null) ? userData?.data.displayName : 'DisplayName'}</Name>
        <Username>@{(userData != null) ? userData?.data.username : 'username'}</Username>
      </ProfileNameWrapper>
      <StyledLink to="settings">Settings</StyledLink>
      <StyledLink to="profile">Profile</StyledLink>
      <StyledButton onClick={handleClick}>Log out</StyledButton>
    </Container>
  )
}
