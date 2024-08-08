import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText/ExpandableText";

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
        <ExpandableText children={game.description_raw} />
      </Box>
    </>
  );
};
