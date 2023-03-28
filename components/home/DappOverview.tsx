import { useEffect, useMemo, useState } from "react";
import * as S from "./DappOverview.styles";
import { BsCaretDownFill } from "react-icons/bs";
import { Provider, Wallet } from "zksync-web3";
import { BigNumber, ethers, utils } from "ethers";
import { protocolATotal } from "@/shared/abi/protocolATotal";
import { membershipTotal } from "@/shared/abi/membershipTotal";
import styled from "styled-components";
import { simpleAccountTotal } from "@/shared/abi/simpleAccountTotal";

const DappOverview = () => {
	const [swapValue, setSwapValue] = useState<number>(0);
	const [select1Value, setSelect1Value] = useState<string>("FUCH");
	const [select2Value, setSelect2Value] = useState<string>("SIA");

	const [account, setAccount] = useState<string | null>(null);

	const [tier, setTier] = useState(0);

	const provider = useMemo(() => {
		return new Provider("https://zksync2-testnet.zksync.dev");
	}, []);

	const protocol = useMemo(() => {
		return new ethers.Contract(
			"0x8e74FbeE22c3B77B00447e71fFc0A45d68761785",
			protocolATotal.abi,
			provider
		);
	}, []);

	useEffect(() => {
		if (!account) return;

		const c = new ethers.Contract(
			"0x4d69de6Ce6EdDb5F35D6549A25332Ff15D718FCB",
			membershipTotal.abi,
			provider
		);

		c.userTier(account)
			// @ts-ignore
			.then((value) => setTier(tier))
			.catch(console.log);
	}, []);

	const handleSubscribe = async () => {
		if (!account) return;

		const accContract = new ethers.Contract(
			account,
			[
				{
					inputs: [
						{
							internalType: "address",
							name: "membership",
							type: "address",
						},
					],
					name: "subscribeToMembership",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
			],
			provider
		);
		let tx = await accContract.populateTransaction.subscribeToMembership(
			"0x4d69de6Ce6EdDb5F35D6549A25332Ff15D718FCB"
		);

		try {
			//@ts-ignore
			await window.ethereum.request({
				//@ts-ignore
				method: "eth_sendTransaction",
				params: [
					// {
					// 	// @ts-ignore
					// 	from: account,
					// 	to: protocol.address,
					// 	gas: "0x76c0", // 30400
					// 	gasPrice: "0x9184e72a000", // 10000000000000
					// 	value: "0", // 2441406250
					// 	data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
					// },
					{
						...tx,
						// @ts-ignore
						from: account,
						gasPrice: BigNumber.from("0x9184e72a000"), // 10000000000000
					},
				],
			});
		} catch (e) {
			console.log("User rejected");
		}
	};

	const handleValue = (e: any) => {
		const value = e.target.value;
		setSwapValue(value);
	};
	const handleSelect1 = (e: any) => {
		const value = e.target.value;
		setSelect1Value(value);
		if (value === "FUCH") {
			setSelect2Value("SIA");
		} else {
			setSelect2Value("FUCH");
		}
	};
	const handleSelect2 = (e: any) => {
		const value = e.target.value;
		setSelect2Value(value);
		if (value === "FUCH") {
			setSelect1Value("SIA");
		} else {
			setSelect1Value("FUCH");
		}
	};

	const handleSwap = async () => {
		if (!account) return;

		let tx = await protocol.populateTransaction.swapExactTokenAWithTokenB(swapValue);

		// const abiCoder = new ethers.utils.AbiCoder();
		// let params = abiCoder.encode(["uint256"], [swapValue]);
		// console.log("params encode", params);

		// // function signature
		// let data = "0xee4299a5" + params.substring(2);
		// console.log("calldata", data);

		try {
			//@ts-ignore
			await window.ethereum.request({
				//@ts-ignore
				method: "eth_sendTransaction",
				params: [
					// {
					// 	// @ts-ignore
					// 	from: account,
					// 	to: protocol.address,
					// 	gas: "0x76c0", // 30400
					// 	gasPrice: "0x9184e72a000", // 10000000000000
					// 	value: "0", // 2441406250
					// 	data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
					// },
					{
						...tx,
						// @ts-ignore
						from: account,

						gasPrice: BigNumber.from("0x9184e72a000"), // 10000000000000
					},
				],
			});
		} catch (e) {
			console.log("User rejected");
		}
	};
	return (
		<>
			<S.InformationColumn>
				<h1>Umiswap</h1>
			</S.InformationColumn>
			<S.MainContainer>
				<S.VoteWrapper>
					<h3>{select1Value === "FUCH" ? "$FUCH -> $SIA" : "$SIA -> $FUCH"}</h3>

					<div>
						<S.SwapBox>
							<S.NameInputStyle
								placeholder="0"
								type="number"
								value={swapValue}
								onChange={handleValue}
							/>
							<S.TokenSelectStyle
								onChange={handleSelect1}
								value={select1Value}
							>
								<option value="FUCH">FUCH</option>
								<option value="SIA">SIA</option>
							</S.TokenSelectStyle>
						</S.SwapBox>
						<S.IconWrapper>
							<BsCaretDownFill />
						</S.IconWrapper>
						<S.SwapBox>
							<S.NameInputStyle
								placeholder="0"
								type="number"
								value={swapValue}
								onChange={handleValue}
							/>
							<S.TokenSelectStyle
								onChange={handleSelect2}
								value={select2Value}
							>
								<option value="FUCH">FUCH</option>
								<option value="SIA">SIA</option>
							</S.TokenSelectStyle>
						</S.SwapBox>
					</div>

					{account ? (
						<S.SwapButton onClick={handleSwap}>Swap</S.SwapButton>
					) : (
						<S.SwapButton
							onClick={async () => {
								// @ts-ignore
								const [account] = await window.ethereum.request({
									method: "eth_requestAccounts",
								});
								console.log("account ", account);
								setAccount(account);
							}}
						>
							Connect
						</S.SwapButton>
					)}
				</S.VoteWrapper>

				{!tier && account && (
					<S.SubscribeBox>
						It seems you are not a part of our membership. Consider joining to
						enjoy exclusive benefits.
						<S.SwapButton
							onClick={handleSubscribe}
							style={{
								width: "10rem",
								fontWeight: 400,
								fontSize: "0.9rem",
								padding: "0.5rem 0",
								marginTop: "1rem",
							}}
						>
							Subscribe
						</S.SwapButton>
					</S.SubscribeBox>
				)}
			</S.MainContainer>
		</>
	);
};

export default DappOverview;
