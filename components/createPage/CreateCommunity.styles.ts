import styled from "styled-components";

export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
`;

export const NameInputStyle = styled.input`
  width: 28em;
  height: 3em;
  margin: 0.5em;
  padding: 1em;
  border-radius: 10px;
  font-size: larger;
  background: black;
  border-color: white;
`;

export const MembershipBox = styled.div`
  width: 34em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border: 1px solid #292929;
  border-radius: 16px;
`;
export const ContractBox = styled.div`
  width: 44em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

export const OneRowMembershipBox = styled.div`
  width: 100%;
  padding: 0.5em;
  & > p {
    font-size: larger;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & input {
    height: 3em;
    border-radius: 10px;
    margin: 0.3em 0;
    padding: 1.1em;
    background: black;
    font-size: large;
  }
  & select {
    height: 3em;
    padding: 0.2em;
    border-radius: 10px;
    font-size: large;
    background: black;
  }
`;

export const AddMembershipButton = styled.div`
  background: #f44336;
  padding: 1em 10em;
  border-radius: 29px;
  font-size: large;
  font-weight: 800;

  cursor: pointer;
`;
