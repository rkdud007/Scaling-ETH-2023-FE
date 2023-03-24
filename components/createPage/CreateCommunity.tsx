import { useState } from "react";
import * as S from "./CreateCommunity.styles";

const CreateCommunity = () => {
  const [memberships, setMemberships] = useState([
    {
      tier: "",
      benefit: "",
      txCountThreshold: "",
      functionSelector: "ee4299a5",
      contractAddress: "",
    },
  ]);

  const basicMembership = {
    tier: "",
    benefit: "",
    txCountThreshold: "",
    functionSelector: "ee4299a5",
    contractAddress: "",
  };

  const functionSelectors = [
    ["swapExactTokenAWithTokenB(uint256)", "ee4299a5"],
    ["swapExactTokenBWithTokenA(uint256)", "c12fd28f"],
  ];

  const addMembership = () => {
    const copy = [...memberships];
    const copyMembership = basicMembership;
    copy.push(copyMembership);
    setMemberships(copy);
  };

  const handleFunctionSelector = (e: any) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleBenefit = (e: any, tier: number) => {
    const value = e.target.value;
    console.log(value, tier);
  };

  const handleDeleteMembership = async (index: number) => {
    let copy = [...memberships];

    copy = copy.filter((item) => copy.indexOf(item) !== index);
    console.log(copy);
    setMemberships(copy);
  };

  return (
    <S.CommunityWrapper>
      <h1>Create your own membership XD</h1>
      {/* <S.NameInputStyle placeholder="Uniswap" /> */}
      <h2>Add memberships</h2>
      <S.ContractBox>
        <S.OneRowMembershipBox>
          {" "}
          <h3>CONTRACT</h3>
          <input placeholder="contract address" />
          <select
            placeholder="Select function"
            onChange={(e) => handleFunctionSelector(e)}
          >
            {functionSelectors.map((selector) => (
              <option value={selector[1]}>{selector[0]}</option>
            ))}
          </select>
        </S.OneRowMembershipBox>
      </S.ContractBox>

      {memberships.map((membership) => {
        const tier = memberships.indexOf(membership);

        return (
          <S.MembershipBox key={tier}>
            <h3>Tier {tier} </h3>
            <div>
              {tier >= 1 ? (
                <button
                  onClick={async () => await handleDeleteMembership(tier)}
                >
                  delete
                </button>
              ) : (
                <></>
              )}
            </div>

            <S.OneRowMembershipBox>
              <h3>CONDITION</h3>

              <div>
                <input placeholder="number of transaction" />
              </div>
            </S.OneRowMembershipBox>
            <S.OneRowMembershipBox>
              <h3>BENEFIT</h3>
              <div>
                <select>
                  <option>Gas Fee Discount</option>
                </select>
                <input
                  onChange={(e) => handleBenefit(e, tier)}
                  placeholder="write down percentage"
                />
              </div>
            </S.OneRowMembershipBox>
          </S.MembershipBox>
        );
      })}

      <S.AddMembershipButton onClick={addMembership}>
        add membership
      </S.AddMembershipButton>
    </S.CommunityWrapper>
  );
};

export default CreateCommunity;
