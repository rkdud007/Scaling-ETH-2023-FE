import styled from "styled-components";

export const StyledButton = styled.div`
  padding: 0.5em;
  background: #2e2e2e;
  font-weight: 700;
  font-size: larger;
  /* cursor: pointer; */
  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  padding: 0.5em;
  background: #2f2f2f;
  justify-content: space-around;
`;
