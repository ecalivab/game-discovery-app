import { Game } from "../../models/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Link to={`/games/${game.slug}`}>
        <Card>
          <Image src={game.background_image}></Image>
          <CardBody>
            <HStack justifyContent={"space-between"} mb={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metactritic} />
            </HStack>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};
