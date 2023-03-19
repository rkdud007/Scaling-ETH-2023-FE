import styled from "styled-components";

export const CreateWalletWrapper = styled.div`
  padding: 1em 2em;
  gap: 3px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WalletPwInputStyle = styled.input`
  width: 28em;
  height: 3em;
  margin: 0.5em;
  padding: 1em;
  border-radius: 10px;
  font-size: larger;
  background: black;
  border-color: white;
`;

export const UnlockButton = styled.div`
  background: #f44336;
  padding: 1em 15em;
  border-radius: 29px;
  font-size: large;
  font-weight: 800;

  cursor: pointer;
`;

export const UnlockInvalidButton = styled.div`
  background: #fff4f3;
  padding: 1em 15em;
  border-radius: 29px;
  font-size: large;
  font-weight: 800;
`;
