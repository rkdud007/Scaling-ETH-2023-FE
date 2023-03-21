import { AtomEffect, atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const passwordState = atom<string>({
  key: "password",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isWalletCreatedState = atom<boolean>({
  key: "isWalletCreated",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isWalletLockedState = atom<boolean>({
  key: "isWalletLocked",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
