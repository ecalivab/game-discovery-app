import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../models/Genre";

// const useGenres = () => useData<Genre>("/genres");

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 60 * 1000,
  });

export default useGenres;
