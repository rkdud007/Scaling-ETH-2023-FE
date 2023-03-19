import { useState } from "react";
import { ethers } from "ethers";
import * as S from "./CreateWalletWrapper.styles";

const CreateWalletWrapper = () => {
  const [password, setPassword] = useState<string>("");
  const wallet = ethers.Wallet.createRandom();
  const handlePassword = (e: any) => {
    const value = e.target.value;
    setPassword(value);
  };

  const createWalletFunc = () => {
    console.log(password);
    console.log("address:", wallet.address);

    console.log("privateKey:", wallet.privateKey);
  };
  return (
    <div>
      <input type="password" value={password} onChange={handlePassword} />
      <button onClick={createWalletFunc}>create wallet</button>
    </div>
  );
};

export default CreateWalletWrapper;
