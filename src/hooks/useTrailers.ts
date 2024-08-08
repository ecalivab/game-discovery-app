import { useQuery } from "@tanstack/react-query";
import { GameTrailer } from "../models/GameTrailer";
import APIClient from "../services/api-client";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: 10 * 60 * 1000,
  });
};

export default useTrailer;
