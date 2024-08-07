import { GameQuery } from "../models/gameQuery";
import { StateCreator } from "zustand";

export interface IGameSlice {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const gameSlice: StateCreator<IGameSlice> = (set) => ({
  gameQuery: {},
  setSearchText: (searchText) => {
    set({ gameQuery: { searchText } });
  },
  setGenreId: (genreId) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } }));
  },
  setPlatformId: (platformId) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } }));
  },
  setSortOrder: (sortOrder) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } }));
  },
});

export default gameSlice;
