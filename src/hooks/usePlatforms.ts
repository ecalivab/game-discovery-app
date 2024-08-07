import { useQuery } from "@tanstack/react-query";
import { Platform } from "../models/game";
import APIClient from "../services/api-client";

// const usePlatforms = () => useData<Platform>("platforms/lists/parents");

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 60 * 1000,
  });

export default usePlatforms;
