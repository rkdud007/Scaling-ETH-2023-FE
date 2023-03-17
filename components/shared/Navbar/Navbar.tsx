import { useRouter } from "next/router";
import * as S from "./Navbar.styles";

const Navbar = () => {
  const router = useRouter();
  return (
    <S.NavbarWrapper>
      <S.StyledButton onClick={() => router.push("/wallet")}>
        Wallet
      </S.StyledButton>
      <S.StyledButton onClick={() => router.push("/create")}>
        Create Community
      </S.StyledButton>
    </S.NavbarWrapper>
  );
};

export default Navbar;
