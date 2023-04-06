import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleLinkBack = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 80px;
  padding: 5px 0;

  text-decoration: none;
  color: black;

  border: 1px solid #ccc;
  border-radius: 10px;

  font-weight: 700;

  text-align: center;

  &:hover {
    color: #fff;
    background-color: blue;
  }
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 18vw minmax(0, 1fr);
  gap: 20px;
  padding: 10px;
  margin: 20px auto;

  border: 1px solid #ccc;
  border-radius: 5px;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const WrapBtn = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;

  list-style: none;
`;

export const StyleLink = styled(NavLink)`
  display: block;
  min-width: 26vw;
  padding: 10px 0;

  text-decoration: none;
  color: black;

  border: 1px solid #ccc;
  border-radius: 10px;

  font-weight: 700;

  text-align: center;

  &.active {
    color: #fff;
    background-color: blue;
  }
`;
