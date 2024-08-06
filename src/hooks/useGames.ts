import { useQuery } from "@tanstack/react-query";
import { Game } from "../models/game";
import { GameQuery } from "../models/gameQuery";
import APIClient from "../services/api-client";

/*
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
*/

const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery | null) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.get({
        params: {
          genres: gameQuery?.genre?.id,
          platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
  });

export default useGames;
