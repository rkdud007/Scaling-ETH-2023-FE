import { useRouter } from "next/router";
import * as S from "./Navbar.styles";
import Image from "next/image";
import logo from "public/logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <S.NavbarWrapper>
      {/* <S.StyledButton onClick={() => router.push("/wallet")}>
        Wallet
      </S.StyledButton>

      <S.StyledButton onClick={() => router.push("/create-wallet")}>
        Create Wallet
      </S.StyledButton> */}
      <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
        <Image src={logo} alt={"logo"} width={200} />
      </div>
      <S.LandingBtnWrapper>
        {pathname === "/example" ? (
          <S.SelectiedTab onClick={() => router.push("/example")}>
            Try Demo
          </S.SelectiedTab>
        ) : (
          <S.StyledButton onClick={() => router.push("/example")}>
            Try Demo
          </S.StyledButton>
        )}
        {pathname === "/create" ? (
          <S.SelectiedTab onClick={() => router.push("/create")}>
            Create Community
          </S.SelectiedTab>
        ) : (
          <S.StyledButton onClick={() => router.push("/create")}>
            Create Community
          </S.StyledButton>
        )}
        <ConnectButton />
      </S.LandingBtnWrapper>
    </S.NavbarWrapper>
  );
};

export default Navbar;
