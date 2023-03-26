import { useState } from "react";
import * as S from "./CreateCommunity.styles";
import { BigNumber, ethers } from "ethers";
import { membershipFactory } from "@/shared/abi/membershipFactory";
import { provider } from "@/shared/wagmiClient";
import { getAccount } from "@wagmi/core";
import {
  useBalance,
  useContract,
  usePrepareSendTransaction,
  useProvider,
  useSendTransaction,
  useSigner,
} from "wagmi";
import { types, utils } from "zksync-web3";
import { membershipTotal } from "@/shared/abi/membershipTotal";
import { element } from "@rainbow-me/rainbowkit/dist/css/reset.css";
import Link from "next/link";

const CreateCommunity = () => {
  const [baseContract, setBaseContract] = useState<string>("");
  const [tier, setTier] = useState<number>(1);
  const [deployedMembershipContract, setDeployedMembershipContract] =
    useState("");
  const [membership, setMembership] = useState({
    tier: 1,
    benefit: 0,
    txCountThreshold: 0,
    functionSelector: 0xee4299a5,
    contractAddress: baseContract,
  });
  const [memberships, setMemberships] = useState<
    Array<[number, number, number, number, string]>
  >([]);

  const functionSelectors = [
    ["SWAP", 0x2cc4081e],
    ["DEPOSIT", 0x94ec6d78],
  ];

  const addMembership = () => {
    console.log(membership);
    const newMembership = [
      tier,
      Number(membership.benefit),
      Number(membership.txCountThreshold),
      membership.functionSelector,
      membership.contractAddress,
    ];
    memberships.push(newMembership as [number, number, number, number, string]);

    // update state with the new list of memberships
    setMemberships([...memberships]);

    console.log(memberships);
    setTier(tier + 1);
  };

  const handleFunctionSelector = (e: any) => {
    const value = e.target.value;
    const functionSelector = functionSelectors.find(
      (selector) => selector[0] === value
    );
    if (functionSelector) {
      const copy = { ...membership };
      copy.functionSelector = Number(functionSelector[1]);
      setMembership(copy);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);
    setMembership((prevMembership) => ({
      ...prevMembership,
      [name]: value,
    }));

    console.log(membership);
  };

  const handleContract = (e: any) => {
    const value = e.target.value;
    setBaseContract(value);
    setMembership((prevMembership) => ({
      ...prevMembership,
      contractAddress: value,
    }));
  };
  const account = getAccount();
  const { data: signer } = useSigner();
  const membershipFactoryContract = useContract({
    address: "0x9E41eADcD7F4D82b70F3aa4Aef73D0d96cbB88a8",
    abi: membershipFactory.abi,
    signerOrProvider: signer,
  });

  const deployMembership = async () => {
    // Generate a random 32 byte buffer
    const randomBuffer = ethers.utils.randomBytes(32);

    // Convert the buffer to a hexadecimal string
    const salt = ethers.utils.hexlify(randomBuffer);

    console.log(signer, provider);

    const deployTx = await membershipFactoryContract?.createMembershipContract(
      salt,
      memberships
    );

    const receipt = await deployTx.wait();

    console.log(deployTx, receipt, provider, account);
    console.log(receipt.contractAddress);
    if (receipt.contractAddress) {
      setDeployedMembershipContract(receipt.contractAddress);
    }
  };

  const { config } = usePrepareSendTransaction({
    request: {
      to: deployedMembershipContract,
      value: BigNumber.from("100000000000000000"),
    },
  });
  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(config);

  const {
    data: balanceData,
    isError: balanceErr,
    isLoading: balanceLoading,
  } = useBalance({
    staleTime: 2_000,
    watch: true,
    address: deployedMembershipContract as `0x${string}`,
  });

  return (
    <S.CommunityWrapper>
      {deployedMembershipContract !== "" ? (
        <S.SuccessWrapper>
          <h1>Successfully created your own membership XD</h1>
          <S.ResultContractWrapper>
            <div>{deployedMembershipContract}</div>
            <Link
              target="blank"
              href={`https://goerli.explorer.zksync.io/address/${deployedMembershipContract}`}
            >
              <div>View on block explorer</div>
            </Link>
          </S.ResultContractWrapper>
          {balanceLoading && <div>Fetching balance…</div>}
          {balanceErr && <div>Error fetching balance</div>}
          <div>
            {" "}
            Balance: {balanceData?.formatted} {balanceData?.symbol}
          </div>
          <S.TopupBtn
            disabled={!sendTransaction}
            onClick={() => sendTransaction?.()}
          >
            Top up Paymaster (0.1ETH)
          </S.TopupBtn>
          {isLoading && <div>Check Wallet</div>}
          {isSuccess && (
            <div>
              Transaction:{" "}
              <Link
                style={{ textDecoration: "underline" }}
                target="blank"
                href={`https://goerli.explorer.zksync.io/tx/${data?.hash}`}
              >
                {data?.hash}
              </Link>{" "}
            </div>
          )}
        </S.SuccessWrapper>
      ) : (
        <>
          <h1>Create your own membership XD</h1>
          {/* <S.NameInputStyle placeholder="Uniswap" /> */}
          {/* <h2>Add memberships</h2> */}
          <S.ContractBox>
            <S.OneRowMembershipBox>
              {" "}
              <h3>TARGET CONTRACT</h3>
              <h5>Syncswap : 0xB3b7fCbb8Db37bC6f572634299A58f51622A847e</h5>
              <div>
                <input
                  placeholder="contract address"
                  value={baseContract}
                  onChange={handleContract}
                />
                {baseContract ===
                  "0xB3b7fCbb8Db37bC6f572634299A58f51622A847e" && (
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
              <S.MembershipBox key={one[0]}>
                <S.TierWrapper>
                  <h2>Tier {one[0]} </h2>
                </S.TierWrapper>
                {/* <S.TierWrapper>
                  <h2>Tier {one[0]} </h2>
                  <div>
                    {one[0] === memberships.length && one.tier !== 1 ? (
                      <S.DeleteTier onClick={handleDeleteMembership}>
                        delete
                      </S.DeleteTier>
                    ) : (
                      <></>
                    )}
                  </div>
                </S.TierWrapper> */}

                <S.OneRowMembershipBox>
                  <h3>CONDITION</h3>
                  <h5>number of transaction</h5>

                  <div>{one[2]}</div>
                </S.OneRowMembershipBox>
                <S.OneRowMembershipBox>
                  <h3>BENEFIT</h3>
                  <h5>Gas Fee Discount (%)</h5>
                  <div>{one[1]}</div>
                </S.OneRowMembershipBox>
              </S.MembershipBox>
            );
          })}
          {baseContract === "0x8e74FbeE22c3B77B00447e71fFc0A45d68761785" && (
            <>
              {" "}
              <div>
                <S.MembershipBox>
                  <S.OneRowMembershipBox>
                    <h3>CONDITION</h3>
                    <div>
                      <input
                        type="number"
                        name="txCountThreshold"
                        value={membership.txCountThreshold}
                        placeholder="number of transaction"
                        onChange={handleChange}
                      />
                    </div>
                  </S.OneRowMembershipBox>
                  <S.OneRowMembershipBox>
                    <h3>BENEFIT</h3>

                    <select>
                      <option>Gas Fee Discount (%)</option>
                    </select>
                    <input
                      type="number"
                      name="benefit"
                      value={membership.benefit}
                      onChange={handleChange}
                      placeholder="write down percentage"
                    />
                  </S.OneRowMembershipBox>
                </S.MembershipBox>
              </div>
              <S.AddMembershipButton onClick={addMembership}>
                add membership
              </S.AddMembershipButton>
              <S.DeployMembershipButton onClick={deployMembership}>
                DEPLOY MEMBERSHIP CONTRACT
              </S.DeployMembershipButton>
            </>
          )}
        </>
      )}
    </S.CommunityWrapper>
  );
};

export default CreateCommunity;
