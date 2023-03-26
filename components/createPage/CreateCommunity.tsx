import { useState } from "react";
import * as S from "./CreateCommunity.styles";

const CreateCommunity = () => {
  const [baseContract, setBaseContract] = useState<string>("");
  const [tier, setTier] = useState<number>(0);
  const [membership, setMembership] = useState({
    tier: tier,
    benefit: 0,
    txCountThreshold: 0,
    functionSelector: "ee4299a5",
    contractAddress: baseContract,
  });
  const [memberships, setMemberships] = useState<any[]>([
    {
      tier: tier,
      benefit: 0,
      txCountThreshold: 0,
      functionSelector: "ee4299a5",
      contractAddress: baseContract,
    },
  ]);

  const basicMembership = {
    tier: tier,
    benefit: 0,
    txCountThreshold: 0,
    functionSelector: "ee4299a5",
    contractAddress: baseContract,
  };

  const functionSelectors = [
    ["swapExactTokenAWithTokenB(uint256)", "ee4299a5"],
    ["swapExactTokenBWithTokenA(uint256)", "c12fd28f"],
  ];

  const addMembership = () => {
    const copy = memberships;
    console.log(copy);
    copy.push(membership);
    setMemberships(copy);

    basicMembership.tier = tier + 1;
    setMembership(basicMembership);

    console.log(copy);
  };

  const handleFunctionSelector = (e: any) => {
    const value = e.target.value;
    console.log(value);
    const copy = { ...membership };
    copy.functionSelector = value;
    setMembership(copy);
  };

  const handleBenefit = (e: any, tier: number) => {
    const value = e.target.value;
    console.log(value, tier);
    const copy = { ...membership };
    copy.benefit = value;
    setMembership(copy);
    console.log(copy);
  };

  const handleCondition = (e: any) => {
    const value = e.target.value;
    console.log(value);
    const copy = { ...membership };
    copy.txCountThreshold = value;
    setMembership(copy);
    console.log(copy);
  };

  const handleDeleteMembership = async () => {
    const copy = [...memberships];
    copy.pop();
    setMemberships(copy);
  };

  const handleContract = (e: any) => {
    const value = e.target.value;
    setBaseContract(value);
  };

  const deployMembership = () => {
    console.log("deploy");
  };

  return (
    <S.CommunityWrapper>
      <h1>Create your own membership XD</h1>
      {/* <S.NameInputStyle placeholder="Uniswap" /> */}
      {/* <h2>Add memberships</h2> */}
      <S.ContractBox>
        <S.OneRowMembershipBox>
          {" "}
          <h3>TARGET CONTRACT</h3>
          <div>
            <input
              placeholder="contract address"
              value={baseContract}
              onChange={handleContract}
            />
            {baseContract === "0xcc" && (
              <select
                placeholder="Select function"
                onChange={(e) => handleFunctionSelector(e)}
              >
                {functionSelectors.map((selector) => (
                  <option key={selector[1]}>{selector[0]}</option>
                ))}
              </select>
            )}
          </div>
        </S.OneRowMembershipBox>
      </S.ContractBox>

      {memberships.map((one) => {
        return (
          <S.MembershipBox key={one.tier}>
            <S.TierWrapper>
              <h2>Tier {one.tier} </h2>
              <div>
                {one.tier === memberships.length && one.tier !== 1 ? (
                  <S.DeleteTier onClick={handleDeleteMembership}>
                    delete
                  </S.DeleteTier>
                ) : (
                  <></>
                )}
              </div>
            </S.TierWrapper>

            <S.OneRowMembershipBox>
              <h3>CONDITION</h3>

              <div>
                {one.tier === memberships.length ? (
                  <input
                    value={membership.txCountThreshold}
                    placeholder="number of transaction"
                    onChange={handleCondition}
                  />
                ) : (
                  <div>{one.txCountThreshold}</div>
                )}
              </div>
            </S.OneRowMembershipBox>
            <S.OneRowMembershipBox>
              <h3>BENEFIT</h3>
              <div>
                {one.tier === memberships.length ? (
                  <div>
                    <select>
                      <option>Gas Fee Discount (%)</option>
                    </select>
                    <input
                      onChange={(e) => handleBenefit(e, tier)}
                      placeholder="write down percentage"
                    />
                  </div>
                ) : (
                  <div>
                    <div>Gas Fee Discount (%)</div>
                    <div>{one.benefit}</div>
                  </div>
                )}
              </div>
            </S.OneRowMembershipBox>
          </S.MembershipBox>
        );
      })}

      <S.AddMembershipButton onClick={addMembership}>
        add membership
      </S.AddMembershipButton>
      <S.DeployMembershipButton onClick={deployMembership}>
        DEPLOY MEMBERSHIP CONTRACT
      </S.DeployMembershipButton>
    </S.CommunityWrapper>
  );
};

export default CreateCommunity;
