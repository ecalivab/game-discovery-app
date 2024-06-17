import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { GameGrid } from "../components/GameGrid/GameGrid";
import GenreList from "../components/GenreList/GenreList";
import { useState } from "react";
import PlatformSelector from "../components/Selector/PlatformSelector";
import { GameQuery } from "../models/gameQuery";

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
          <NavBar />
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
          <PlatformSelector
            onSelectPlatform={(p) =>
              setGameQuery({ ...gameQuery, platform: p })
            }
            selectedPlatform={gameQuery.platform}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};
