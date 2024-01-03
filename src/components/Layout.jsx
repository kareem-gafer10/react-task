import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" container mx-auto mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
