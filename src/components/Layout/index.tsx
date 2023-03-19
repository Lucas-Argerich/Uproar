import { useEffect } from 'react'
import Header from '../Header';
import styled from 'styled-components';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { selectAuth, selectCurrentUser, selectIsLoading } from '../../redux/selectors/userSelectors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  flex-grow: 1;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  flex-basis: 700px;
  max-width: 700px;
`;

const RightSection = styled.section`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Layout() {
  const navigate = useNavigate()

  const isLoginPage = Boolean(useMatch('login'));
  const isRegisterPage = Boolean(useMatch('register'));
  const isPostPage = Boolean(useMatch('post'));
  const showSideContent = isLoginPage || isRegisterPage || isPostPage;
  
  const userAuth = useSelector(selectAuth)
  const userData = useSelector(selectCurrentUser)
  const isUserLoading = useSelector(selectIsLoading)

  useEffect(() => {
    if(!isUserLoading && userAuth && !userData) {
      navigate("/register")
    }
  }, [navigate, userAuth, userData, isUserLoading])
  
  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftSection>{!showSideContent && <Navbar />}</LeftSection>
        <Main>
          <Outlet />
        </Main>
        <RightSection></RightSection>
      </Wrapper>
    </Container>
  );
}
