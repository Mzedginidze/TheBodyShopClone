import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NewestInfo from "../components/NewestInfo";

const Layout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <NewestInfo />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
