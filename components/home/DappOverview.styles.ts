import styled from "styled-components";

export const VoteWrapper = styled.div`
  border: 1px solid #2d2d2d;
  border-radius: 15px;

  width: 40%;
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
  height: 3em;
  margin: 0.5em;
  padding: 1em;
  border-radius: 10px;
  font-size: larger;
  background: black;
  border-color: white;
`;

export const TokenSelectStyle = styled.select`
  height: 3em;
  padding: 0.2em;
  border-radius: 10px;
  font-size: large;
  background: black;
`;

export const SwapButton = styled.div`
  background: #f44336;
  padding: 1em 10em;
  border-radius: 29px;
  font-size: large;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
