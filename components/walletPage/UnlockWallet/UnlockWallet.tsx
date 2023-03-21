import { useRouter } from "next/router";
import * as S from "./UnlockWallet.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWalletLockedState, passwordState } from "@/shared/recoil";
import { useState } from "react";

const UnlockWallet = () => {
  const [isLocked, setIsLocked] = useRecoilState<boolean>(isWalletLockedState);
  const originialPw = useRecoilValue<string>(passwordState);
  const [inputPw, setInputPw] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleInputPw = (e: any) => {
    const value = e.target.value;
    setInputPw(value);
  };
  const handleUnlock = () => {
    if (inputPw === originialPw) {
      setIsLocked(false);
    } else {
    }
  };
  return (
    <>
      {isError ? <div>Wrong Password</div> : <div></div>}
      <div>Logo</div>
      <S.WelcomebackStyle>Unlocked Wallet</S.WelcomebackStyle>

      <S.UnlockButton onClick={handleUnlock}>Unlock</S.UnlockButton>
    </>
  );
};

export default UnlockWallet;
