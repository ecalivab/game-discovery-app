import { create } from "zustand";
import gameSlice from "./gameSlice";
import { IGameSlice } from "./gameSlice";

export const useAppStore = create<IGameSlice>((...s) => ({
  ...gameSlice(...s),
}));
