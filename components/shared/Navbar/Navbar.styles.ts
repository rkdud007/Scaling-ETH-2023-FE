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
      rgba(255, 175, 255, 1) 26%,
      rgba(255, 144, 255, 1) 52%,
      rgba(255, 0, 255, 1) 92%
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
