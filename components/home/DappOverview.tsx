import * as S from "./DappOverview.styles";
import { BsCaretDownFill } from "react-icons/bs";

const DappOverview = () => {
  return (
    <>
      <S.InformationColumn>
        <h1>Umiswap</h1>
      </S.InformationColumn>
      <S.VoteWrapper>
        <div>
          <div>
            <S.NameInputStyle placeholder="0.0" type="number" />
            <S.TokenSelectStyle>
              <option>Token A</option>
              <option>Token B</option>
            </S.TokenSelectStyle>
          </div>
          <S.IconWrapper>
            <BsCaretDownFill />
          </S.IconWrapper>
          <div>
            <S.NameInputStyle placeholder="0.0" type="number" />
            <S.TokenSelectStyle>
              <option>Token A</option>
              <option>Token B</option>
            </S.TokenSelectStyle>
          </div>
        </div>
        <S.SwapButton>Swap</S.SwapButton>
      </S.VoteWrapper>
    </>
  );
};

export default DappOverview;
