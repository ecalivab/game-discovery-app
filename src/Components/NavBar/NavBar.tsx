import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack padding={"1rem"} justifyContent={"space-between"}>
      <Image src={logo} boxSize="5rem" />
      <ColorModeSwitch />
    </HStack>
  );
};
