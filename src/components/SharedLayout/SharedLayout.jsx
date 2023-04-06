import { Outlet } from 'react-router-dom';
import { Container, Header, LinkStyled } from './SharedLayout.styled';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </nav>
      </Header>
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="120"
            width="120"
            display = "flex"
            justify-content = "center"
            ariaLabel="blocks-loading"
            wrapperStyle={{display:"flex",justifyContent:"center"}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
