import { env } from "./environment";

const localL1network = {
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

const localZKSyncnetwork = {
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
