import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText/ExpandableText";
import { DefinitionItem } from "../components/DefinitionItem/DefinitionItem";
import CriticScore from "../components/GameCard/CriticScore";
import { GameTrailer } from "../components/GameTrailer/GameTrailer";

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug as string);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Box paddingTop={5}>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map((p) => (
            <Text key={p.platform.id}>{p.platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metacritic Score">
          <CriticScore score={game.metacritic}></CriticScore>
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publishers">
          {game.publishers?.map((pub) => <Text key={pub.id}>{pub.name}</Text>)}
        </DefinitionItem>
      </SimpleGrid>

      <GameTrailer gameId={game.id} />
    </>
  );
};
