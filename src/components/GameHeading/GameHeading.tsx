import { Heading } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";
import { useAppStore } from "../../store/useAppStore";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const { gameQuery } = useAppStore();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
