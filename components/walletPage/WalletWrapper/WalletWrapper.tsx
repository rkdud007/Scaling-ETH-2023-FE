import { useRouter } from "next/router";
import * as S from "./WalletWrapper.styles";
import LockWallet from "../LockWallet/LockWallet";
import UnlockWallet from "../UnlockWallet/UnlockWallet";
import { useEffect, useState } from "react";

const WalletWrapper = ({ isUnLocked }: { isUnLocked: any }) => {
  console.log(isUnLocked);
  return (
    <S.WalletWrapperStyle>
      {isUnLocked ? <UnlockWallet /> : <LockWallet />}
    </S.WalletWrapperStyle>
  );
};

export default WalletWrapper;
