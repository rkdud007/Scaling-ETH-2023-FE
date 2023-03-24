import styled from "styled-components";

export const LandingTitle = styled.div`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  padding: 0.4em 0px;
`;

export const LandingZKSync = styled.div`
  margin: 0.9em 0;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  padding: 1rem 1.4rem;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    131deg,
    rgb(239 118 160) 26%,
    rgb(239 102 138) 52%,
    rgb(224 80 81) 92%
  );
  border: none;
  width: 15em;
`;

export const LandingDesc = styled.div`
  width: 80%;
  padding: 0.2em 0px;
  font-size: 1.3rem;
  line-height: 1.5;
`;

export const LandingIllustration = styled.div`
  color: transparent;
  width: 16em;
  height: 16em;
  position: absolute;
  left: 46%;
  opacity: 83%;
  top: 15%;
`;

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

export const LandingWrapper = styled.div`
  display: flex;
  color: black;
  height: 92%;
  padding: 0.3em;
  background: white;
  justify-content: space-around;
  align-items: center;
`;
