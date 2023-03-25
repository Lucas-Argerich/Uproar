import { useEffect } from 'react';
import Header from '../Header';
import styled from 'styled-components';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import {
  selectAuth,
  selectCurrentUser,
  selectIsLoading,
} from '../../redux/selectors/userSelectors';
import ProfileCard from '../ProfileCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding-inline: 20px;

  @media only screen and (min-width: 600px) {
    padding-inline: 40px;
  }

  @media only screen and (min-width: 768px) {
    padding-inline: 60px;
  }

  @media only screen and (min-width: 992px) {
    padding-inline: 100px;
  }
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
  const navigate = useNavigate();

  const isLoginPage = Boolean(useMatch('login'));
  const isRegisterPage = Boolean(useMatch('register'));
  const isPostPage = Boolean(useMatch('post'));
  const showSideContent = isLoginPage || isRegisterPage || isPostPage;

  const userAuth = useSelector(selectAuth);
  const userData = useSelector(selectCurrentUser);
  const isUserLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isUserLoading && userAuth && !userData) {
      navigate('/register');
    }
  }, [navigate, userAuth, userData, isUserLoading]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftSection>{!showSideContent && <Navbar />}</LeftSection>
        <Main>
          <Outlet />
        </Main>
        <RightSection>{!showSideContent && <ProfileCard />}</RightSection>
      </Wrapper>
    </Container>
  );
}
