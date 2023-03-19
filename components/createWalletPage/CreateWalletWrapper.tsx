import { Wallet, Provider, utils, types } from "zksync-web3";
import { useState } from "react";
import * as S from "./CreateWalletWrapper.styles";
import { mainclient, walletClient } from "@/shared/wagmiClient";
import { simpleAccountAbi } from "@/shared/abi/simpleAccount";
import { walletFactoryAbi } from "@/shared/abi/walletFactory";
import { getAccount, toBytes } from "viem";
import { simpleAccountTotal } from "@/shared/abi/simpleAccountTotal";
import { ethers } from "ethers";

const CreateWalletWrapper = () => {
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const wallet = ethers.Wallet.createRandom();
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
    const provider = new Provider("http://localhost:8545/");
    const factoryContract = new ethers.Contract(
      "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb",
      walletFactoryAbi,
      wallet
    );

    const salt = ethers.constants.HashZero;

    let deployTx = await factoryContract.populateTransaction.deployWallet(
      salt,
      [wallet.address]
    );

    const paymasterInterface = new ethers.utils.Interface([
      "function general(bytes data)",
    ]);

    const gasLimit = await provider.estimateGas(deployTx);
    const gasPrice = await provider.getGasPrice();

    // Creating transaction that utilizes paymaster feature
    deployTx = {
      ...deployTx,
      from: wallet.address,
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      chainId: (await provider.getNetwork()).chainId,
      nonce: await provider.getTransactionCount(wallet.address),
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

    const sentTx = await wallet.sendTransaction(deployTx);
    await sentTx.wait();

    // calculate deployed account address

    const abiCoder = new ethers.utils.AbiCoder();
    const accountAddress = utils.create2Address(
      factoryContract.address,
      utils.hashBytecode(simpleAccountTotal.bytecode),
      salt,
      abiCoder.encode(["address[]"], [[wallet.address]])
    );

    const accountContract = new ethers.Contract(
      accountAddress,
      simpleAccountTotal.abi,
      provider
    );

    // console.log(password);
    // console.log("address:", wallet.address);
    // const [address] = await walletClient.getAddresses();
    // const account = getAccount(address);
    // const bytecode = await mainclient.getBytecode({
    //   address: "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb",
    // });
    // const bytecodeType = bytecode as `0x${string}`;

    // const walletFactoryAddress = await walletClient.deployContract({
    //   abi: walletFactoryAbi,
    //   account,
    //   bytecode: bytecodeType,
    //   args: [wallet.privateKey as `0x${string}`],
    // });
    // console.log(walletFactoryAddress, "factory");

    // const { request } = await mainclient.simulateContract({
    //   address: "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb" as `0x${string}`,
    //   abi: walletFactoryAbi,
    //   functionName: "deployWallet",
    //   args: [
    //     "0x0000000000000000000000000000000000000000000000000000000000000001",
    //     [address],
    //   ],
    // });

    // const data = await mainclient.readContract({
    //   address: "0xD7C08B89fC8F6381b0B44154e31eF83b8B03c81a",
    //   abi: simpleAccountAbi,
    //   functionName: "isOwner",
    //   args: [myAdress as `0x${string}`],
    // });
    console.log(accountContract, wallet.privateKey);
  };
  return (
    <S.CreateWalletWrapper>
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
    </S.CreateWalletWrapper>
  );
};

export default CreateWalletWrapper;
