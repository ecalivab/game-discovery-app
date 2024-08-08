import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding={"1rem"}>
      <Link to="/">
        <Image src={logo} boxSize="5rem" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
