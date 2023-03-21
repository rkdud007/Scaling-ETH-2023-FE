import { useRouter } from "next/router";
import * as S from "./Navbar.styles";
import { useRecoilValue } from "recoil";
import { isWalletCreatedState } from "@/shared/recoil";

const Navbar = () => {
  const isWalletExist = useRecoilValue<boolean>(isWalletCreatedState);
  const router = useRouter();
  return (
    <S.NavbarWrapper>
      <S.StyledButton onClick={() => router.push("/wallet")}>
        Wallet
      </S.StyledButton>

      <S.StyledButton onClick={() => router.push("/create-wallet")}>
        Create Wallet
      </S.StyledButton>

      <S.StyledButton onClick={() => router.push("/create")}>
        Create Community
      </S.StyledButton>
    </S.NavbarWrapper>
  );
};

export default Navbar;
