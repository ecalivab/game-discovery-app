import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../models/game";
import { GameQuery } from "../models/gameQuery";
import APIClient from "../services/api-client";
import { FetchResponse } from "../models/fetchResponse";

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
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.get({
        params: {
          genres: gameQuery?.genreId,
          platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 10 * 60 * 1000,
  });

export default useGames;
