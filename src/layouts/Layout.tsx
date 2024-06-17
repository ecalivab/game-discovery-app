import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { GameGrid } from "../components/GameGrid/GameGrid";
import GenreList from "../components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "../models/genre";

export const Layout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};
