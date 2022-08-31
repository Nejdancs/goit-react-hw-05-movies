import Container from 'components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
