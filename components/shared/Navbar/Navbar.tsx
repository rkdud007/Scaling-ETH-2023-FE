import { useRouter } from "next/router";
import * as S from "./Navbar.styles";
import Image from "next/image";
import logo from "public/logo.png";

const Navbar = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <S.NavbarWrapper>
      {/* <S.StyledButton onClick={() => router.push("/wallet")}>
        Wallet
      </S.StyledButton>

      <S.StyledButton onClick={() => router.push("/create-wallet")}>
        Create Wallet
      </S.StyledButton> */}
      <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
        <Image src={logo} alt={"logo"} width={50} />
      </div>

      <S.StyledButton onClick={() => router.push("/example")}>
        Try Now
      </S.StyledButton>
      <S.StyledButton onClick={() => router.push("/create")}>
        Create Community
      </S.StyledButton>
    </S.NavbarWrapper>
  );
};

export default Navbar;
