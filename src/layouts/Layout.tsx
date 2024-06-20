import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { GameGrid } from "../components/GameGrid/GameGrid";
import GenreList from "../components/GenreList/GenreList";
import { useState } from "react";
import PlatformSelector from "../components/Selector/PlatformSelector";
import { GameQuery } from "../models/gameQuery";
import SortSelector from "../components/Selector/SortSelector";
import GameHeading from "../components/GameHeading/GameHeading";

export const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            ></GenreList>
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <Box mb={5}>
              <GameHeading gameQuery={gameQuery} />
            </Box>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                onSelectPlatform={(p) =>
                  setGameQuery({ ...gameQuery, platform: p })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};
