import { useRouter } from "next/router";
import * as S from "./LockWallet.styles";

const LockWallet = () => {
  const router = useRouter();
  return (
    <>
      <div>Logo</div>
      <S.WelcomebackStyle>Welcome Back</S.WelcomebackStyle>
      <S.DescriptionStyle>Unlock your wallet to continue</S.DescriptionStyle>
      <S.WalletPwInputStyle placeholder="Password" type="password" />
      <S.RecoveryTextStyle onClick={() => router.push("/recovery")}>
        Forgot the Password?
      </S.RecoveryTextStyle>
      <S.UnlockButton>Unlock</S.UnlockButton>
    </>
  );
};

export default LockWallet;
