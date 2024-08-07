import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

export const NavBar = () => {
  return (
    <HStack padding={"1rem"}>
      <Image src={logo} boxSize="5rem" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
