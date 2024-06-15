import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar/NavBar";
import { GameGrid } from "../Components/GameGrid/GameGrid";

export const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>Aside</GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};
