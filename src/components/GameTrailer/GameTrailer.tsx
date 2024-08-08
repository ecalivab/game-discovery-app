import { Box } from "@chakra-ui/react";
import useTrailer from "../../hooks/useTrailers";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <Box>
      <video
        src={data?.results[0]?.data[480]}
        poster={data?.results[0]?.preview}
        controls
      ></video>
    </Box>
  );
};
