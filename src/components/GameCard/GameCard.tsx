import { Game } from "../../models/game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metactritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};
