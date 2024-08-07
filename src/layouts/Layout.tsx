import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};
