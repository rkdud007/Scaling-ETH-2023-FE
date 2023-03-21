import { Provider, utils, types, Wallet } from "zksync-web3";
import { useState } from "react";
import * as S from "./CreateWalletWrapper.styles";
import { walletFactoryAbi } from "@/shared/abi/walletFactory";
import { simpleAccountTotal } from "@/shared/abi/simpleAccountTotal";
import { ethers } from "ethers";
import { useRecoilState } from "recoil";
import { isWalletCreatedState, passwordState } from "@/shared/recoil";

const CreateWalletWrapper = ({ walletCreated }: { walletCreated: boolean }) => {
  const [, setRecoilPassword] = useRecoilState<string>(passwordState);
  const [password, setPassword] = useState<string>("");
  const [, setWalletCreated] = useRecoilState<boolean>(isWalletCreatedState);
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const wallet = Wallet.createRandom();

  // const myWallet = new Wallet(
  //   "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110"
  // );
  // const myAdress = myWallet.address;
  const handlePassword = (e: any) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleAgainPassword = (e: any) => {
    const value = e.target.value;
    setCheckPassword(value);
    if (value === password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const createWalletFunc = async () => {
    const provider = new Provider("http://localhost:3050/");
    const zksyncWallet = wallet.connect(provider);
    const factoryContract = new ethers.Contract(
      "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb",
      walletFactoryAbi,
      zksyncWallet
    );
    const saltUint8Array = ethers.utils.randomBytes(32);
    const salt = ethers.utils.hexlify(saltUint8Array);
    console.log(salt, salt.length);

    let deployTx = await factoryContract.populateTransaction.deployWallet(
      salt,
      [zksyncWallet.address]
    );

    const paymasterInterface = new ethers.utils.Interface([
      "function general(bytes data)",
    ]);

    const gasLimit = await provider.estimateGas(deployTx);
    const gasPrice = await provider.getGasPrice();

    // Creating transaction that utilizes paymaster feature
    deployTx = {
      ...deployTx,
      from: zksyncWallet.address,
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      chainId: (await provider.getNetwork()).chainId,
      nonce: await provider.getTransactionCount(zksyncWallet.address),
      type: 113,
      customData: {
        gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        paymasterParams: {
          paymaster: factoryContract.address,
          paymasterInput: paymasterInterface.encodeFunctionData("general", [
            [],
          ]),
        },
      } as types.Eip712Meta,
      value: ethers.BigNumber.from(0),
    };

    const sentTx = await zksyncWallet.sendTransaction(deployTx);
    await sentTx.wait();
    console.log(sentTx);

    // calculate deployed account address

    const abiCoder = new ethers.utils.AbiCoder();
    const accountAddress = utils.create2Address(
      factoryContract.address,
      utils.hashBytecode(simpleAccountTotal.bytecode),
      salt,
      abiCoder.encode(["address[]"], [[zksyncWallet.address]])
    );

    const accountContract = new ethers.Contract(
      accountAddress,
      simpleAccountTotal.abi,
      provider
    );
    console.log(accountContract, wallet.privateKey);
    if (accountContract) {
      setRecoilPassword(password);
      setWalletCreated(true);
    }
  };
  return (
    <S.CreateWalletWrapper>
      {walletCreated ? (
        <div>success</div>
      ) : (
        <>
          {" "}
          <h1>Create New Wallet</h1>
          <p>Type your password</p>
          <S.WalletPwInputStyle
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <p>Type your password again</p>
          <S.WalletPwInputStyle
            type="password"
            value={checkPassword}
            onChange={handleAgainPassword}
          />
          {isValid ? (
            <S.UnlockButton onClick={createWalletFunc}>
              create wallet
            </S.UnlockButton>
          ) : (
            <S.UnlockInvalidButton>create wallet</S.UnlockInvalidButton>
          )}
        </>
      )}
    </S.CreateWalletWrapper>
  );
};

export default CreateWalletWrapper;
