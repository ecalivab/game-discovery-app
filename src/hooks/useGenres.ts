import { useQuery } from "@tanstack/react-query";
import { Genre } from "../models/genre";
import APIClient from "../services/api-client";

// const useGenres = () => useData<Genre>("/genres");

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 60 * 1000,
  });

export default useGenres;
