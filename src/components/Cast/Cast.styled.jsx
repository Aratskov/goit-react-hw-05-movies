import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 0;

  list-style: none;

  & li {
    border: 1px solid #ccc;
  }
  & img {
    max-width: 100%;
    height: auto;
  }

  & p {
    margin: 5px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
`;
