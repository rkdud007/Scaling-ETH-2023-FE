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

export const TierWrapper = styled.div`
  display: flex;
  gap:3px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
`;

export const MembershipBox = styled.div`
  width: 34em;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border: 1px solid rgb(224 80 81);
  border-radius: 16px;
  margin: 1em;
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
  background: linear-gradient(
    131deg,
    rgb(239 118 160) 26%,
    rgb(239 102 138) 52%,
    rgb(224 80 81) 92%
  );
  padding: 1em 10em;
  border-radius: 29px;
  font-size: large;
  font-weight: 800;
  margin: 1em 0 3em 0;
  cursor: pointer;
`;

export const DeployMembershipButton = styled.div`
  background: linear-gradient(
    131deg,
    rgb(236 56 118) 26%,
    rgb(240 52 101) 52%,
    rgb(224 0 2) 92%
  );
  bottom: 11px;
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  border-radius: 0;
  position: absolute;
  padding: 1em 10em;

  font-size: large;
  font-weight: 800;

  cursor: pointer;
`;

export const DeleteTier = styled.div`
  background: linear-gradient(
    131deg,
    rgb(239 118 160) 26%,
    rgb(239 102 138) 52%,
    rgb(224 80 81) 92%
  );
  padding: 1em;

  border-radius: 29px;
  font-size: large;
  font-weight: 800;
  width: 6em;
  display: flex;
  justify-content: center;

  cursor: pointer;
`;
