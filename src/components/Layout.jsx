import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NewestInfo from "../components/NewestInfo";

const Layout = () => {
  return (
    <>
      <Header />
      <NewestInfo />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
