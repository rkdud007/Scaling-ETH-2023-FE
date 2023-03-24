import styled from "styled-components";

export const StyledButton = styled.div`
  padding: 0.5em;
  background: white;
  font-weight: 700;
  font-size: larger;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      131deg,
      rgb(239 118 160) 26%,
      rgb(239 102 138) 52%,
      rgb(224 80 81) 92%
    );
    color: white;
    border-bottom: 1px solid black;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  padding: 0.5em;
  background: white;
  justify-content: space-around;
  align-items: center;
`;
