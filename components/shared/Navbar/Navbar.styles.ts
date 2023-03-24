import styled from "styled-components";

export const LandingBtnWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
export const SelectiedTab = styled.div`
  font-weight: 700;
  font-size: larger;
  padding: 0.7em 2em;
  border-radius: 30px;
  cursor: pointer;

  background: linear-gradient(
    131deg,
    rgb(239 118 160) 26%,
    rgb(239 102 138) 52%,
    rgb(224 80 81) 92%
  );
  color: white;
`;

export const StyledButton = styled.div`
  padding: 0.5em;
  background: white;
  font-weight: 700;
  font-size: larger;
  color: black;
  padding: 0.7em 2em;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      131deg,
      rgb(239 118 160) 26%,
      rgb(239 102 138) 52%,
      rgb(224 80 81) 92%
    );
    color: white;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  padding: 0.5em;
  background: white;
  justify-content: space-around;
  align-items: center;
`;
