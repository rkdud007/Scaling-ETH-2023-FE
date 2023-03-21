import { useRouter } from "next/router";
import * as S from "./UnlockWallet.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { getFromStorage, setToStorage } from "@/shared/localstorage";

const UnlockWallet = () => {
  return (
    <>
      <div>Logo</div>
      <S.WelcomebackStyle>Unlocked Wallet</S.WelcomebackStyle>
    </>
  );
};

export default UnlockWallet;
