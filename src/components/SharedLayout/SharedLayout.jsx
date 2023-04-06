import { Outlet } from "react-router-dom";
import { Container, Header, LinkStyled } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
