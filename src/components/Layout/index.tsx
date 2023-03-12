import Header from '../Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

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
  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftSection>a</LeftSection>
        <Main>
          <Outlet />
        </Main>
        <RightSection>a</RightSection>
      </Wrapper>
    </Container>
  );
}
