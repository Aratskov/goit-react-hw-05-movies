import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: block;

  padding: 10px 0;

  text-decoration: none;
  color: black;

  font-size: 22px;
  font-weight: 700;

  text-align: center;

  &.active {
    text-decoration: underline;
    color: #ff0000b8;
  }

  &:hover:not(.active) {
    color: orange;
  }
`;
