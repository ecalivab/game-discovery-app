import { NavBar } from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
