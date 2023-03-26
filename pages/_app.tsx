import "@/styles/globals.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { chains, wagmiClient } from "@/shared/wagmiClient";
// import { localL1network, wagmiClient } from "@/shared/wagmiClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={280}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
