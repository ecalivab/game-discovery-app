import { Game } from "../models/game";
import useData from "./useData";
import { GameQuery } from "../models/gameQuery";

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
