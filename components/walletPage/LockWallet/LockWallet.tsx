import { useRouter } from "next/router";
import * as S from "./LockWallet.styles";
import { useState } from "react";
import { getFromStorage, setToStorage } from "@/shared/localstorage";

const LockWallet = () => {
  const originialPw = getFromStorage("password");
  const [inputPw, setInputPw] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleInputPw = (e: any) => {
    const value = e.target.value;
    setInputPw(value);
  };
  const handleUnlock = () => {
    if (inputPw === originialPw) {
      setToStorage("wallet-unlocked", true);
      router.push("/wallet");
    } else {
      setToStorage("wallet-unlocked", false);
    }
  };
  return (
    <>
      {isError ? <div>Wrong Password</div> : <div></div>}
      <div>Logo</div>
      <S.WelcomebackStyle>Welcome Back</S.WelcomebackStyle>
      <S.DescriptionStyle>Unlock your wallet to continue</S.DescriptionStyle>
      <S.WalletPwInputStyle
        placeholder="Password"
        type="password"
        value={inputPw}
        onChange={handleInputPw}
      />
      <S.RecoveryTextStyle onClick={() => router.push("/recovery")}>
        Forgot the Password?
      </S.RecoveryTextStyle>
      <S.UnlockButton onClick={handleUnlock}>Unlock</S.UnlockButton>
    </>
  );
};

export default LockWallet;
