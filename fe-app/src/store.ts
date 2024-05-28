import { create } from "zustand";
import { Payment } from "./types/payment.types";

type FullstackChallengeState = {
  payments: Payment[];
  characters: string[][];
  bias: string;
  code: string;
  updatePayments: (newPayments: Payment[]) => void;
  updateCharacters: (newCharacters: string[][]) => void;
  updateBias: (newBias: string) => void;
  updateCode: (newCode: string) => void;
};

export const useFullStackChallengeStore = create<FullstackChallengeState>(
  (set) => ({
    payments: [],
    characters: [],
    bias: "",
    code: "00",
    updatePayments: (newPayments) => set(() => ({ payments: newPayments })),
    updateCharacters: (newCharacters) =>
      set(() => ({ characters: newCharacters })),
    updateBias: (newBias) => set(() => ({ bias: newBias })),
    updateCode: (newCode) => set(() => ({ code: newCode })),
  })
);
