import { useRouter } from "next/router";
import * as S from "./Landing.styles";
import Image from "next/image";
import illust from "public/illustration.png";
import flower from "public/flower.png";

const Landing = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <S.LandingWrapper>
      <div>
        <S.LandingTitle>
          INCENTIVISE MEMBER, <br /> WALLET FOR COMMUNITY
        </S.LandingTitle>
        <S.LandingDesc>
          Personalize member's on-chain membership benefits using account
          abstraction
        </S.LandingDesc>
        <S.LandingZKSync
          onClick={() => router.push("https://era.zksync.io/docs/dev/")}
        >
          powered by. zkSync Era
        </S.LandingZKSync>
      </div>
      <div>
        <S.LandingIllustration>
          <Image src={illust} alt={"logo"} />
        </S.LandingIllustration>
      </div>
    </S.LandingWrapper>
  );
};

export default Landing;
