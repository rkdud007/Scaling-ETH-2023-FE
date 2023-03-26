import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { env } from "./environment";
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { configureChains, createClient, WagmiConfig } from "wagmi";

export const localL1network = {
  id: 9,
  network: "l1-local",
  name: "L1 local",
  nativeCurrency: { name: "L1 local", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:8545/"],
    },
    public: {
      http: ["http://localhost:8545/"],
    },
  },
};

export const testnet = {
  id: 280,
  network: "zkSync Era Testnet",
  name: "zkSync Era Testnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.era.zksync.dev"],
    },
    public: {
      http: ["https://testnet.era.zksync.dev"],
    },
  },
};

export const localZKSyncnetwork = {
  id: 270,
  network: "l2-local-zksync",
  name: "L2 local zkSync",
  nativeCurrency: { name: "L2 local zkSync", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:3050/"],
    },
    public: {
      http: ["http://localhost:3050/"],
    },
  },
};

// /**
//  * Wagmi.sh Configuration (https://wagmi.sh/docs)
//  */

// export const mainclient = createPublicClient({
//   chain: localZKSyncnetwork,
//   transport: http(),
// });

// export const walletClient = createWalletClient({
//   chain: localL1network,
//   transport: http("http://localhost:8545/"),
// });

// // export const walletClient = createWalletClient({
// //   chain: localZKSyncnetwork,
// //   transport: http(),
// // });

// const provider = "https://zksync2-testnet.zksync.dev";
export const { chains, provider } = configureChains(
  [testnet],
  [
    jsonRpcProvider({
      rpc: (_testnet) => ({
        http: "https://zksync2-testnet.zksync.dev",
      }),
    }),
  ]
);
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
// a
