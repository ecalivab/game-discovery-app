import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 300;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!children) {
    return null;
  }

  if (children.length <= LIMIT) {
    return <Text>{children}</Text>;
  }

  return (
    <>
      <Text>{expanded ? children : `${children.substring(0, LIMIT)}...`}</Text>
      <Box pt={2}>
        <Button
          color={"black"}
          backgroundColor={"yellow"}
          _hover={{ backgroundColor: "yellow" }}
          onClick={handleExpandClick}
          size={"xs"}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </>
  );
};
