import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameDetails } from "../models/GameDetails";

const apiClient = new APIClient<GameDetails>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 10 * 60 * 1000,
  });

export default useGameDetails;
