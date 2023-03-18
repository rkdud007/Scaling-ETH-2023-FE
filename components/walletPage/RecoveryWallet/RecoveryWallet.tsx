import { useRouter } from "next/router";
import * as S from "./RecoveryWallet.styles";

const RecoveryWallet = () => {
  const router = useRouter();
  return (
    <S.WalletWrapperStyle>
      <div>Logo</div>
      <S.WelcomebackStyle>Email Recovery</S.WelcomebackStyle>
      <S.DescriptionStyle>Unlock your wallet to continue</S.DescriptionStyle>
      <S.WalletPwInputStyle placeholder="Password" type="password" />
      <S.RecoveryTextStyle>Forgot the Password?</S.RecoveryTextStyle>
      <S.UnlockButton>Unlock</S.UnlockButton>
    </S.WalletWrapperStyle>
  );
};

export default RecoveryWallet;
