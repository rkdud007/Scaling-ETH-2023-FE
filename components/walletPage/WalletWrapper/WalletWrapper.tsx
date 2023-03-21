import { useRouter } from "next/router";
import * as S from "./WalletWrapper.styles";
import LockWallet from "../LockWallet/LockWallet";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWalletLockedState } from "@/shared/recoil";
import UnlockWallet from "../UnlockWallet/UnlockWallet";
import { useEffect, useState } from "react";

const WalletWrapper = ({ isLocked }: { isLocked: boolean }) => {
  return (
    <S.WalletWrapperStyle>
      {isLocked ? <LockWallet isLocked={isLocked} /> : <UnlockWallet />}
    </S.WalletWrapperStyle>
  );
};

export default WalletWrapper;
