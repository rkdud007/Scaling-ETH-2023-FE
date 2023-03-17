import * as S from "./DappOverview.styles";

const VotingBox = () => {
  return (
    <S.VoteWrapper>
      <div>Cast your vote</div>
      <div>
        <div>yes</div>
        <div>Vote</div>
      </div>
    </S.VoteWrapper>
  );
};
// TODO : Want to show some information about voting transaction. ex. transaction call from where to where
const InformationBox = () => {
  return (
    <S.InformationWrapper>
      <div>Information</div>
      <div>
        <S.InformationColumn>
          <b>From</b>
          <span>hihi</span>
        </S.InformationColumn>
        <S.InformationColumn>
          <b>To</b>
          <span>hihi</span>
        </S.InformationColumn>
        <S.InformationColumn>
          <b>Gaslimit</b>
          <span>hihi</span>
        </S.InformationColumn>
        <S.InformationColumn>
          <b>Stretegie(s)</b>
          <span>hihi</span>
        </S.InformationColumn>
        <S.InformationColumn>
          <b>Stretegie(s)</b>
          <span>hihi</span>
        </S.InformationColumn>
        <S.InformationColumn>
          <b>Stretegie(s)</b>
          <span>hihi</span>
        </S.InformationColumn>
      </div>
    </S.InformationWrapper>
  );
};

const DappOverview = () => {
  return (
    <>
      <S.InformationWrapper>
        <div>Example DAPP : snapshot mock</div>
      </S.InformationWrapper>
      <InformationBox />
      <VotingBox />
    </>
  );
};

export default DappOverview;
