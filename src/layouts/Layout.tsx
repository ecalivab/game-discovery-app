import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "../components/GameGrid/GameGrid";
import GameHeading from "../components/GameHeading/GameHeading";
import GenreList from "../components/GenreList/GenreList";
import { NavBar } from "../components/NavBar/NavBar";
import PlatformSelector from "../components/Selector/PlatformSelector";
import SortSelector from "../components/Selector/SortSelector";

export const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <Box mb={5}>
              <GameHeading />
            </Box>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};
