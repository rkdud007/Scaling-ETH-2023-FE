import styled from "styled-components";

export const VoteWrapper = styled.div`
  border: 1px solid #2d2d2d;
  border-radius: 15px;
  padding: 0 2em;
  width: 40%;
  margin: auto;
  & > div:first-child {
    border-bottom: 1px solid #292929;
    padding: 1em 0;
    font-size: larger;
    font-weight: 600;
  }
  & > div:nth-child(2) {
    padding: 1em 0;
  }
  & > div:nth-child(2) > div:first-child {
    padding: 1em 0;
    border: 1px solid #ffffff;
    border-radius: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(2) > div:nth-child(2) {
    cursor: pointer;
    background: #394aff;
    padding: 1em 0;
    border-radius: 39px;
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InformationWrapper = styled.div`
  border: 1px solid #2d2d2d;
  border-radius: 15px;
  padding: 0 2em;
  width: 40%;
  margin: 1em auto;
  & > div:first-child {
    border-bottom: 1px solid #292929;
    padding: 1em 0;
    font-size: larger;
    font-weight: 600;
  }
  & > div:nth-child(2) {
    padding: 1em 0;
  }
`;

export const InformationColumn = styled.div`
  display: flex;
  margin: 0.5em 0;
  font-size: larger;
  justify-content: space-between;
  & > b {
    color: #8b949e;
  }
`;
