import { useRouter } from "next/router";
import * as S from "./WalletWrapper.styles";
import LockWallet from "../LockWallet/LockWallet";

const WalletWrapper = () => {
  const isLocked = true;
  const router = useRouter();
  return (
    <S.WalletWrapperStyle>
      {isLocked ? <LockWallet /> : <></>}
    </S.WalletWrapperStyle>
  );
};

export default WalletWrapper;
