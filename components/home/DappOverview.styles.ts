import styled from "styled-components";

export const VoteWrapper = styled.div`
  border: 1px solid #e15052;
  border-radius: 15px;

  width: 30%;
  padding: 3em;
  margin: auto;
`;

export const IconWrapper = styled.div`
  justify-content: center;
  background: #414141;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: auto;
`;

export const InformationColumn = styled.div`
  display: flex;
  margin: 3em 0;
  font-size: larger;
  justify-content: center;
  & > b {
    color: #8b949e;
  }
`;

export const NameInputStyle = styled.input`
  width: 23em;
  all: unset;
  height: 1em;
  margin: 0.5em;
  padding: 1em;
  border-radius: 10px;
  font-size: larger;
  background: black;
  border-color: white;
`;

export const SwapBox = styled.div`
  display: flex;
  margin: 1em 0;
  align-items: center;
  border-radius: 78px;
  justify-content: center;
  width: 100%;
  background: #000000;
  border: 1px solid rgb(224 80 81);
`;

export const TokenSelectStyle = styled.select`
  height: 3em;

  cursor: pointer;
  background: #1b1b1b;
  border-radius: 32px;
  padding: 0 30px;
  border: black;
  font-weight: 800;
  font-size: inherit;
`;

export const SwapButton = styled.div`
  background: linear-gradient(
    131deg,
    rgb(239 118 160) 26%,
    rgb(239 102 138) 52%,
    rgb(224 80 81) 92%
  );
  padding: 1em 10em;
  border-radius: 78px;
  font-size: large;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
