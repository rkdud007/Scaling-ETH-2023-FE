import { useState } from "react";
import * as S from "./DappOverview.styles";
import { BsCaretDownFill } from "react-icons/bs";
import { Provider, Wallet } from "zksync-web3";
import { ethers } from "ethers";
import { protocolATotal } from "@/shared/abi/protocolATotal";

const DappOverview = () => {
  const [swapValue, setSwapValue] = useState<number>(0);
  const [select1Value, setSelect1Value] = useState<string>("FUCH");
  const [select2Value, setSelect2Value] = useState<string>("SIA");
  const handleValue = (e: any) => {
    const value = e.target.value;
    setSwapValue(value);
  };
  const handleSelect1 = (e: any) => {
    const value = e.target.value;
    setSelect1Value(value);
    if (value === "FUCH") {
      setSelect2Value("SIA");
    } else {
      setSelect2Value("FUCH");
    }
  };
  const handleSelect2 = (e: any) => {
    const value = e.target.value;
    setSelect2Value(value);
    if (value === "FUCH") {
      setSelect1Value("SIA");
    } else {
      setSelect1Value("FUCH");
    }
  };
  const wallet = Wallet.createRandom();
  const handleSwap = () => {
    const provider = new Provider("https://testnet.era.zksync.dev");
    const zksyncWallet = wallet.connect(provider);

    const protocolContract = new ethers.Contract(
      "0x8e74FbeE22c3B77B00447e71fFc0A45d68761785",
      protocolATotal.abi,
      zksyncWallet
    );
    console.log(protocolContract);
  };
  return (
    <>
      <S.InformationColumn>
        <h1>Amogusswap</h1>
      </S.InformationColumn>
      <S.VoteWrapper>
        <h3>{select1Value === "FUCH" ? "$FUCH -> $SIA" : "$SIA -> $FUCH"}</h3>

        <div>
          <S.SwapBox>
            <S.NameInputStyle
              placeholder="0"
              type="number"
              value={swapValue}
              onChange={handleValue}
            />
            <S.TokenSelectStyle onChange={handleSelect1} value={select1Value}>
              <option value="FUCH">FUCH</option>
              <option value="SIA">SIA</option>
            </S.TokenSelectStyle>
          </S.SwapBox>
          <S.IconWrapper>
            <BsCaretDownFill />
          </S.IconWrapper>
          <S.SwapBox>
            <S.NameInputStyle
              placeholder="0"
              type="number"
              value={swapValue}
              onChange={handleValue}
            />
            <S.TokenSelectStyle onChange={handleSelect2} value={select2Value}>
              <option value="FUCH">FUCH</option>
              <option value="SIA">SIA</option>
            </S.TokenSelectStyle>
          </S.SwapBox>
        </div>
        <S.SwapButton onClick={handleSwap}>Swap</S.SwapButton>
      </S.VoteWrapper>
    </>
  );
};

export default DappOverview;
